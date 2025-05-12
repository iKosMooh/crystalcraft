import { COLORS } from '@/app/styles/theme';

export const headerStyles = {
  container: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(31, 41, 55, 0.8)',
    zIndex: 50,
    borderBottom: `1px solid ${COLORS.secondary}`
  },
  logo: {
    background: 'linear-gradient(45deg, #9309AA, #D044CD)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.5rem',
    fontWeight: 700
  }
};