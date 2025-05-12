'use client';
import { useState, useCallback, useEffect, JSX } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Particle = ({ initialX, initialY, delay }: { 
  initialX: number; 
  initialY: number;
  delay: number;
}) => {
  return (
    <motion.div
      className={styles.particle}
      initial={{
        opacity: 0.8,
        scale: 0,
        x: initialX,
        y: initialY,
      }}
      animate={{
        opacity: [0.8, 0.5, 0],
        scale: [0, 1, 0],
        y: initialY + 2000, // Aumenta a distância da queda
        x: initialX + Math.random() * 400 - 200, // Maior variação horizontal
        rotate: Math.random() * 360 // Rotação aleatória
      }}
      transition={{
        duration: 8 + Math.random() * 8, // Duração mais longa
        repeat: Infinity,
        delay: delay,
        ease: 'linear'
      }}
      style={{
        position: 'absolute',
        background: `radial-gradient(circle, rgba(156, 39, 176, 0.4) 0%, rgba(103, 58, 183, 0.2) 100%)`,
        borderRadius: '50%',
        filter: 'blur(8px)',
      }}
    />
  );
};

export const Background = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  const createParticle = useCallback(() => {
    const viewportWidth = window.innerWidth;
    const newParticle = (
      <Particle
        key={Date.now()}
        initialX={Math.random() * viewportWidth} // Distribuição por toda a largura
        initialY={Math.random() * -100}
        delay={Math.random() * 4}
      />
    );
    
    setParticles(prev => [...prev.slice(-30), newParticle]); // Reduz número máximo de partículas
  }, []);

  useEffect(() => {
    const interval = setInterval(createParticle, 2000); // Intervalo maior (2 segundos)
    return () => clearInterval(interval);
  }, [createParticle]);

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.imageOverlay}></div>
      {particles}
    </div>
  );
};