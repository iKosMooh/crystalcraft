'use client';
import { motion } from 'framer-motion';
import { COLORS, SIZES } from '@/app/styles/theme';

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

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  // Converte a cor de fundo com alpha 0.6
  const backgroundWithAlpha = hexToRgba(COLORS.background, 0.6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        minHeight: '100vh',
        background: backgroundWithAlpha,
        margin: '1% 10%',
        borderRadius: SIZES.borderRadius,
        padding: SIZES.padding,
        fontFamily: 'Inter, sans-serif',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </motion.div>
  );
};


export const CardContainer = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    style={{
      maxWidth: SIZES.maxWidth,
      margin: '0 auto',
      background: COLORS.primary,
      borderRadius: SIZES.borderRadius,
      padding: '2.5rem',
      boxShadow: `0 8px 32px ${hexToRgba(COLORS.background, 0.3)}`,
      position: 'relative',
      overflow: 'visible',
      border: `1px solid ${hexToRgba(COLORS.secondary, 0.2)}`
    }}
  >
    <div style={{
      position: 'absolute',
      inset: 0,
      borderRadius: SIZES.borderRadius,
      boxShadow: `inset 0 0 48px ${hexToRgba(COLORS.background, 0.1)}`,
      pointerEvents: 'none',
    }}/>
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      position: 'relative',
      zIndex: 1
    }}>
      {children}
    </div>
  </motion.div>
);