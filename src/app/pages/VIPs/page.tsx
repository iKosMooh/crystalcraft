'use client';
import { motion } from 'framer-motion';
import { hexToRgba } from '@/app/utils/colorUtils';
import styles from './styles.module.css';
import Image from 'next/image';

const vips = [
  {
    name: 'Topázio',
    color: '#f9cc00',
    image: '/images/VIP_TOPAZIO.png',
    price: 'R$ 12/mês',
    benefits: [
      { text: 'Tag [VIP] no jogo e no Discord', status: true },
      { text: 'Acesso à área VIP no Discord', status: true },
      { text: 'Fila prioritária para entrar no servidor', status: true },
      { text: 'Kit VIP Diário', status: true },
      { text: 'Kit VIP Semanal', status: true },
      { text: 'Kit VIP Mensal', status: true },
      { text: 'Tempo reduzido para Teleportar', status: '3s' },
      { text: 'Mochila', status: '2 slots' },
      { text: 'Sem delay no chat', status: true },
      { text: 'Crafting table virtual (/craft)', status: true },
      { text: 'Blocos na cabeça (/hat)', status: true },
      { text: 'Ender chest virtual (/ec)', status: true },
      { text: 'Comando /back', status: true },
      { text: 'Chat colorido (/selecionarcor)', status: true },
      { text: 'Homes públicas (/publica)', status: true },
      { text: 'Limite de homes', status: '5' },
      { text: 'Verificar slimes chunks (/slime)', status: true },
      { text: 'Perda de coins ao morrer reduzida', status: '10%' },
      { text: 'XP de habilidades', status: '2x' },
      { text: 'Coleta automática (/ap)', status: false },
      { text: 'Não perde XP ao morrer', status: false },
      { text: 'Renomear itens coloridos', status: false },
      { text: 'Anunciar loja (/lojas anunciar)', status: false },
      { text: 'Voar Temporário (/voar)', status: false },
      { text: 'Tear virtual (/loom)', status: false },
      { text: 'Cortador de Pedras (/stonecutter)', status: false },
      { text: 'Bancada de Ferraria (/smithingtable)', status: false },
      { text: 'Compactar minérios (/compactar)', status: false },
      { text: 'Comando /feed', status: false },
      { text: 'Reparar itens (/reparar)', status: false },
      { text: 'Nick gradiente (/nick)', status: false },
      { text: 'Ver jogadores próximos (/near)', status: false },
      { text: 'Bigorna virtual (/bigorna)', status: false },
    ],
    activation: [
      '2.000 coins',
      '2 Chaves VIP Topázio',
      '1 Chave Divina',
      '1 Chave VIP Topázio para todos online'
    ],
    reward: 'Dentro do servidor use o comando: /comprar'
  },
  {
    name: 'Safira',
    color: '#4861ff',
    image: '/images/VIP_SAFIRA.png',
    price: 'R$ 17/mês',
    benefits: [
      { text: 'Tag [VIP] no jogo e no Discord', status: true },
      { text: 'Acesso à área VIP no Discord', status: true },
      { text: 'Fila prioritária para entrar no servidor', status: true },
      { text: 'Kit VIP Diário', status: true },
      { text: 'Kit VIP Semanal', status: true },
      { text: 'Kit VIP Mensal', status: true },
      { text: 'Tempo reduzido para Teleportar', status: '2s' },
      { text: 'Mochila', status: '4 slots' },
      { text: 'Sem delay no chat', status: true },
      { text: 'Crafting table virtual (/craft)', status: true },
      { text: 'Blocos na cabeça (/hat)', status: true },
      { text: 'Ender chest virtual (/ec)', status: true },
      { text: 'Comando /back', status: true },
      { text: 'Chat colorido (/selecionarcor)', status: true },
      { text: 'Homes públicas (/publica)', status: true },
      { text: 'Limite de homes', status: '10' },
      { text: 'Verificar slimes chunks (/slime)', status: true },
      { text: 'Perda de coins ao morrer reduzida', status: '10%' },
      { text: 'XP de habilidades', status: '2.5x' },
      { text: 'Coleta automática (/ap)', status: true },
      { text: 'Não perde XP ao morrer', status: true },
      { text: 'Renomear itens coloridos', status: true },
      { text: 'Anunciar loja (/lojas anunciar)', status: true },
      { text: 'Voar Temporário (/voar)', status: '15min/dia' },
      { text: 'Tear virtual (/loom)', status: false },
      { text: 'Cortador de Pedras (/stonecutter)', status: false },
      { text: 'Bancada de Ferraria (/smithingtable)', status: false },
      { text: 'Compactar minérios (/compactar)', status: false },
      { text: 'Comando /feed', status: false },
      { text: 'Reparar itens (/reparar)', status: false },
      { text: 'Nick gradiente (/nick)', status: false },
      { text: 'Ver jogadores próximos (/near)', status: false },
      { text: 'Bigorna virtual (/bigorna)', status: false },
    ],
    activation: [
      '5.000 coins',
      '4 Chaves VIP Safira',
      '2 Chaves Míticas',
      '1 Chaves VIP Safira para todos online'
    ],
    reward: 'Dentro do servidor use o comando: /comprar'
  },
  {
    name: 'Rubi',
    color: '#c00000',
    price: 'R$ 24/mês',
    image: '/images/VIP_RUBI.png',
    benefits: [
      { text: 'Tag [VIP] no jogo e no Discord', status: true },
      { text: 'Acesso à área VIP no Discord', status: true },
      { text: 'Fila prioritária para entrar no servidor', status: true },
      { text: 'Kit VIP Diário', status: true },
      { text: 'Kit VIP Semanal', status: true },
      { text: 'Kit VIP Mensal', status: true },
      { text: 'Tempo reduzido para Teleportar', status: '4s' },
      { text: 'Mochila', status: '6 slots' },
      { text: 'Sem delay no chat', status: true },
      { text: 'Crafting table virtual (/craft)', status: true },
      { text: 'Blocos na cabeça (/hat)', status: true },
      { text: 'Ender chest virtual (/ec)', status: true },
      { text: 'Comando /back', status: true },
      { text: 'Chat colorido (/selecionarcor)', status: true },
      { text: 'Homes públicas (/publica)', status: true },
      { text: 'Limite de homes', status: '15' },
      { text: 'Verificar slimes chunks (/slime)', status: true },
      { text: 'Perda de coins ao morrer reduzida', status: '10%' },
      { text: 'XP de habilidades', status: '3x' },
      { text: 'Coleta automática (/ap)', status: true },
      { text: 'Não perde XP ao morrer', status: true },
      { text: 'Renomear itens coloridos', status: true },
      { text: 'Anunciar loja (/lojas anunciar)', status: true },
      { text: 'Voar Temporário (/voar)', status: '30min/dia' },
      { text: 'Tear virtual (/loom)', status: true },
      { text: 'Cortador de Pedras (/stonecutter)', status: true },
      { text: 'Bancada de Ferraria (/smithingtable)', status: true },
      { text: 'Compactar minérios (/compactar)', status: true },
      { text: 'Comando /feed', status: true },
      { text: 'Reparar itens (/reparar)', status: true },
      { text: 'Nick gradiente (/nick)', status: true },
      { text: 'Ver jogadores próximos (/near)', status: true },
      { text: 'Bigorna virtual (/bigorna)', status: true },
    ],
    activation: [
      '10.000 coins',
      '5 Chaves VIP Rubi',
      '4 Chaves Mítica',
      '2 Chaves VIP Rubi para todos online'
    ],
    reward: 'Dentro do servidor use o comando: /comprar'
  }
];

const VipComparison = () => {
  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        🎮 Escolha Seu VIP
      </motion.h1>

      <div className={styles.cardsContainer}>
        {vips.map((vip, index) => (
          <motion.div
            key={vip.name}
            className={styles.vipCard}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.cardHeader}>
              <motion.div
                className={styles.vipImage}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={vip.image}
                  alt={vip.name}
                  width={200}
                  height={200}
                  className={styles.vipImage}
                />
                <div
                  className={styles.imageGlow}
                  style={{ background: hexToRgba(vip.color, 0.3) }}
                />
              </motion.div>

              <div className={styles.vipTitleContainer}>
                <h2 style={{ color: vip.color }}>{vip.name}</h2>
                {index === 1 && (
                  <motion.span
                    className={styles.popularBadge}
                    initial={{ rotate: -5, scale: 0 }}
                    animate={{ rotate: -5, scale: 1 }}
                  >
                    ⭐ Mais Popular
                  </motion.span>
                )}
              </div>
            </div>

            <div className={styles.benefitsList}>
              {vip.benefits.map((benefit, benefitIndex) => (
                <motion.div
                  key={`${vip.name}-${benefitIndex}`}
                  className={styles.benefitItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className={styles.benefitText}>
                    {benefit.text}
                  </span>

                  <div className={styles.statusIndicator}>
                    {typeof benefit.status === 'boolean' ? (
                      benefit.status ? (
                        <div className={styles.checkMark} style={{ color: vip.color }}>
                          ✓
                        </div>
                      ) : (
                        <div className={styles.xMark}>✗</div>
                      )
                    ) : (
                      <div
                        className={styles.specialValue}
                        style={{
                          background: hexToRgba(vip.color, 0.2),
                          color: vip.color
                        }}
                      >
                        {benefit.status}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.activationBox}>
                <h3 style={{ color: vip.color }}>🔑 Ativação</h3>
                <ul>
                  {vip.activation.map((item, i) => (
                    <li key={i}>
                      <div className={styles.activationItem}>
                        <span className={styles.activationIcon}>✦</span>
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.p
                className={styles.priceTag}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                style={{ color: vip.color, fontWeight: 'bold',fontSize: '2rem', textAlign: 'center' }}
              >
                {vip.price}
              </motion.p>

              <motion.div
                className={styles.rewardBox}
                style={{
                  background: `linear-gradient(45deg, ${vip.color}, ${hexToRgba(vip.color, 0.7)})`,
                  boxShadow: `0 4px 24px ${hexToRgba(vip.color, 0.3)}`
                }}
                whileHover={{ y: -3 }}
              >
                🎉 {vip.reward}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VipComparison;