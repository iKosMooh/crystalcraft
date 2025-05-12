import { useState } from 'react';

export const useUserVerification = () => {
  const [isLoading, setIsLoading] = useState(false);

  const verifyUser = async (lastName: string) => {
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/verifyRegisterMine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lastName }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Erro na requisição');
      }

      return { 
        status: 'success',
        message: data.message,
        data: data.data 
      };

    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error('Resposta inválida da API');
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { verifyUser, isLoading };
};