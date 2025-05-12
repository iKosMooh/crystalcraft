'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface CarouselItem {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  link: string;
}

interface CarrouselProps {
  items: CarouselItem[];
  height?: string;
}

function getDisplayedIndices(current: number, total: number): number[] {
  if (total <= 3) {
    return Array.from({ length: total }, (_, i) => i);
  }

  let prev = current - 1;
  let next = current + 1;

  if (prev < 0) prev = total - 1;
  if (next >= total) next = 0;

  return [prev, current, next];
}

const Carrousel: React.FC<CarrouselProps> = ({ items, height = '500px' }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const total = items.length;

  if (total === 0) return null;

  const nextSlide = () => {
    setDirection('right');
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const displayedIndices = getDisplayedIndices(current, total);

  return (
    <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden' }}>
      <AnimatePresence initial={false} mode='popLayout'>
        <motion.div
          key={current}
          initial={{
            x: direction === 'right' ? '100%' : '-100%',
            opacity: 0.5
          }}
          animate={{
            x: '0%',
            opacity: 1
          }}
          exit={{
            x: direction === 'right' ? '-100%' : '100%',
            opacity: 0.5
          }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.6
          }}
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          <Image
            src={items[current].image}
            alt={items[current].title}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />

          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 0,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                position: 'absolute',
                textAlign: 'center',
                color: '#fff',
                padding: '0 20px',
                maxWidth: '80%',
                zIndex: 2,
                width: '100%' // Adicionado para melhor responsividade
              }}
            >
              <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{items[current].title}</h1>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{items[current].description}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={items[current].link}
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  backgroundColor: '#3E72F4',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#fff',
                }}
              >
                {items[current].buttonLabel}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '4px',
          zIndex: 2,
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '4px',
          zIndex: 2,
        }}
      >
        ›
      </button>

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 2,
        }}
      >
        {displayedIndices.map((index) => (
          <div
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === current ? '#3E72F4' : '#ccc',
              cursor: 'pointer',
            }}
            onClick={() => {
              setDirection(index > current ? 'right' : 'left');
              setCurrent(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;