'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { COLORS } from '@/app/styles/theme';

export const Button = ({
  type = 'button',
  isLoading,
  label,
  ...props
}: {
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  label: string;
} & HTMLMotionProps<'button'>) => (
  <motion.button
    type={type}
    disabled={isLoading}
    whileHover={!isLoading ? { scale: 1.05, backgroundColor: COLORS.secondary } : {}}
    whileTap={{ scale: 0.95 }}
    style={{
      width: '100%',
      padding: '1rem',
      background: COLORS.accent,
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 500,
      cursor: isLoading ? 'not-allowed' : 'pointer',
      opacity: isLoading ? 0.7 : 1,
    }}
    {...props}
  >
    {label}
  </motion.button>
);