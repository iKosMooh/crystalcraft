import { motion } from 'framer-motion';
import { COLORS } from '@/app/styles/theme';
import Image from 'next/image';

type HeaderProps = {
  logo?: string; // Caminho para imagem opcional
};

export const Header = ({ logo }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(15, 10, 30, 0.85)',
        zIndex: 50,
        borderBottom: `1px solid ${COLORS.secondary}33`,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          {logo && (
            <Image
              src={logo}
              alt="CrystalCraft Logo"
              style={{
                height: '40px',
                width: 'auto',
                borderRadius: '8px',
              }}
            />
          )}
          <span
            style={{
              background: `linear-gradient(45deg, ${COLORS.accent}, ${COLORS.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.75rem',
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          >
            CrystalCraft
          </span>
        </motion.div>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <motion.a
            href="/"
            whileHover={{
              scale: 1.05,
              color: COLORS.accent,
            }}
            style={{
              color: COLORS.text,
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Home
          </motion.a>

          <motion.a
            href="/pages/VIPs"
            whileHover={{
              scale: 1.05,
              color: COLORS.accent,
            }}
            style={{
              color: COLORS.text,
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Vips
          </motion.a>

          <motion.a
            href="/pages/rules"
            whileHover={{
              scale: 1.05,
              color: COLORS.accent,
            }}
            style={{
              color: COLORS.text,
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Regras
          </motion.a>
          <motion.a
            href="/pages/how-play"
            whileHover={{
              scale: 1.05,
              color: COLORS.accent,
            }}
            style={{
              color: COLORS.text,
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Como Jogar
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};
