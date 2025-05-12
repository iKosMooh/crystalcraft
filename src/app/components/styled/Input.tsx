'use client';
import { motion } from 'framer-motion';
import { COLORS } from '@/app/styles/theme';

// Função auxiliar para converter hex para rgba
function hexToRgba(hex: string, alpha: number): string {
  // Remove o '#' se existir
  const cleanHex = hex.replace('#', '');
  // Converte os componentes da cor
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const Input = ({ 
  value, 
  onChange, 
  placeholder, 
  disabled 
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled?: boolean;
}) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    style={{ 
      position: 'relative',
      width: '100%',
      padding: '2px' // Para evitar cortes no hover
    }}
  >
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '1rem',
        background: hexToRgba(COLORS.background, 0.15),
        border: `2px solid ${hexToRgba(COLORS.secondary, 0.3)}`,
        borderRadius: '8px',
        color: COLORS.text,
        fontSize: '1rem',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
        outline: 'none',
        margin: '5% 0'
      }}
      onFocus={(e) => {
        e.target.style.borderColor = COLORS.accent;
        e.target.style.boxShadow = `0 0 0 3px ${hexToRgba(COLORS.accent, 0.2)}`;
      }}
      onBlur={(e) => {
        e.target.style.borderColor = hexToRgba(COLORS.secondary, 0.3);
        e.target.style.boxShadow = 'none';
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0%',
      height: '2px',
      background: COLORS.accent,
      transition: 'width 0.3s ease'
    }} className="input-underline"/>
  </motion.div>
);