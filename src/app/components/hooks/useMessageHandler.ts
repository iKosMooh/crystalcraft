import { useState } from 'react';

export const useMessageHandler = () => {
  const [message, setMessageState] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');

  const setMessage = (text: string, messageType: 'success' | 'error') => {
    setMessageState(text);
    setType(messageType);
  };

  return { message, type, setMessage };
};