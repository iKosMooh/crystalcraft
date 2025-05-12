import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const buttonHover = {
  scale: 1.05,
  backgroundColor: '#2E2B8A',
};

export const inputFocus = {
  borderColor: '#6366F1',
  boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.25)',
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const messageAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};