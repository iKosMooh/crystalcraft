'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Card {
  image: string;
  title: string;
  link: string;
  cardColor?: string; // Cor opcional para cada card
}

interface CardSectionProps {
  cards: Card[];
  buttonLabel: string;
  buttonLink: string;
}

const CardSection: React.FC<CardSectionProps> = ({ cards, buttonLabel, buttonLink }) => {
  return (
    <section
      style={{
        maxWidth: '1200px',
        margin: '40px auto',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px 0',
          flexWrap: 'wrap',
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              width: '300px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              backgroundColor: card.cardColor || 'white', // Usando cardColor se existir
            }}
          >
            <Link href={card.link} passHref style={{ textDecoration: 'none', color: 'black' }}>
              <div style={{ cursor: 'pointer' }}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%' }}
                />
                <h3 style={{ padding: '16px', fontSize: '1.5rem' }}>{card.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Link href={buttonLink} passHref>
        <button
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#7D3C98',
            color: 'white',
            border: 'none',
            borderRadius: '32px',
            fontWeight: 'bold',
          }}
        >
          {buttonLabel}
        </button>
      </Link>
    </section>
  );
};

export default CardSection;
