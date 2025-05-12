import { Header } from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Background } from '@/app/components/Background';
import { COLORS } from '@/app/styles/theme';
import { NextSeo } from "next-seo";
import Head from 'next/head'; // ✅ Correto

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" style={{ backgroundColor: COLORS.background }}>
      <body style={{ 
        margin: 0,
        paddingTop: '80px' // Espaço para o header fixo
      }}>
        <Head>
          <title>CrystalCraft</title>
        </Head>
        <NextSeo noindex={false} />;
        <Background />
        <Header logo="/images/logo.png" /> {/* Caminho da imagem */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}