'use client';

import React from 'react';
import Link from 'next/link';

interface PurpleBannerProps {
  id?: string;
  title: string;
  description: React.ReactNode;
  buttonLabel: string;
  buttonLink: string;
}

const PurpleBanner: React.FC<PurpleBannerProps> = ({ id, title, description, buttonLabel, buttonLink }) => {
  return (
    <div id={id}
      style={{
        backgroundColor: '#7D3C98', // Cor roxa
        color: 'white', // Texto branco
        padding: '40px 20px',
        borderRadius: '16px',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '40px auto',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{description}</p>
      <Link href={buttonLink} passHref>
        <button
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: 'white',
            color: '#4A235A',
            border: 'none',
            borderRadius: '32px',
            fontWeight: 'bold',
          }}
        >
          {buttonLabel}
        </button>
      </Link>
    </div>
  );
};

export default PurpleBanner;