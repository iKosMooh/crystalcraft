/**
 * Converte cor hexadecimal para RGBA
 * @param hex - String hexadecimal (3 ou 6 caracteres)
 * @param alpha - Valor de transparência (0 a 1)
 * @returns String no formato rgba(r, g, b, a)
 */
export const hexToRgba = (hex: string, alpha: number): string => {
    // Remove o caractere # se presente
    const cleanHex = hex.replace('#', '');
    
    // Validação do formato
    if (![3, 6].includes(cleanHex.length)) {
      throw new Error(`Formato hexadecimal inválido: ${hex}`);
    }
  
    // Expande formato abreviado (3 caracteres)
    const fullHex = cleanHex.length === 3 
      ? cleanHex.split('').map(c => c + c).join('')
      : cleanHex;
  
    // Converte para valores RGB
    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 4), 16);
    const b = parseInt(fullHex.substring(4, 6), 16);
  
    // Valida valores
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error(`Valores hexadecimais inválidos: ${hex}`);
    }
  
    // Valida alpha
    const validatedAlpha = Math.min(1, Math.max(0, alpha));
    
    return `rgba(${r}, ${g}, ${b}, ${validatedAlpha})`;
  };
  
  /**
   * Valida se uma string é um hexadecimal válido
   */
  export const isValidHex = (color: string): boolean => {
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);
  };