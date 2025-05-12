'use client';
import { motion } from 'framer-motion';
import { COLORS } from '@/app/styles/theme';

export const Message = ({
  children,
  type = 'success'
}: {
  children: React.ReactNode;
  type?: 'success' | 'error';
}) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    style={{
      marginTop: '1.5rem',
      padding: '1rem',
      background: type === 'error' ? COLORS.error : COLORS.success,
      borderRadius: '8px',
      color: 'white',
      textAlign: 'center',
    }}
  >
    {children}
  </motion.div>
);