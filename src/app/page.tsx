'use client';

import { PageContainer } from '@/app/components/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Carrousel, { CarouselItem } from '@/app/components/Carrousel';
import PurpleBanner from '@/app/components/Banner';
import CardSection from '@/app/components/CardSection';

// Componente HeroSection com animação e banner responsivo
function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        width: '100%',
        maxWidth: '1200px',
        height: '90vh',
        overflow: 'hidden',
        padding: '0 20px',
      }}
    >
      <Image
        src="/images/banner.png"
        alt="Banner"
        width={800}
        height={400}
        style={{ objectFit: 'contain', width: '90%' }}
        priority
      />
    </motion.section>
  );
}

export default function Home() {
  // Informações para os slides do carrossel
  const carouselItems: CarouselItem[] = [
    {
      image: '/images/img1.png',
      title: 'Torne-se um sobrevivente',
      description: 'Junte-se a nós e descubra um mundo cheio de aventuras!',
      buttonLabel: 'Como jogar',
      link: '#como-jogar',
    },
    {
      image: '/images/img2.png',
      title: 'Mantenha-se atualizado',
      description: 'Entre em nosso Discord e fique por dentro de todas as novidades!',
      buttonLabel: 'Entrar no Discord',
      link: 'https://discord.com/invite/KJgDgnusWD',
    },
    {
      image: '/images/img3.png',
      title: 'Apoie nosso servidor',
      description: 'Adquira um VIP e ajude a manter o servidor ativo!',
      buttonLabel: 'Confira',
      link: '/pages/VIPs',
    },
  ];

  // Informações para os cards
  const cardItems = [
    {
      image: '/images/VIP_TOPAZIO.png',
      title: 'VIP Topázio',
      link: '/pages/VIPs',
      cardColor: '#FFD700',
    },
    {
      image: '/images/VIP_SAFIRA.png',
      title: 'VIP Safira',
      link: '/pages/VIPs',
      cardColor: '#4861ff',
    },
    {
      image: '/images/VIP_RUBI.png',
      title: 'VIP Rubi',
      link: '/pages/VIPs',
      cardColor: '#c00000',
    },
  ];

  return (
    <>
      {/* HeroSection fora do PageContainer */}
      <HeroSection />

      <PageContainer>
        {/* Seção do carrossel */}
        <Carrousel items={carouselItems} />

        {/* Banner roxo após o carrossel */}
        <PurpleBanner
          id="como-jogar"
          title="Jogue agora mesmo!"
          description={
            <>
              Utilize o IP <span style={{ fontWeight: 'bold', color: '#FFD700' }}>mc.CrystalCraft.com.br</span> no java 1.21+ e{' '}
              <span style={{ fontWeight: 'bold', color: '#FFD700' }}>mc.CrystalCraft.com.br:27680</span> para Minecraft bedrock!
            </>
          }
          buttonLabel="Como jogar"
          buttonLink="/pages/how-play"
        />

        {/* Seção de Cards */}
        <CardSection
          cards={cardItems}
          buttonLabel="Vantajens VIP"
          buttonLink="/pages/VIPs"
        />
      </PageContainer>
    </>
  );
}
