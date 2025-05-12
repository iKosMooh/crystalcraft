'use client';
import { motion } from 'framer-motion';
import { PageContainer, CardContainer } from '@/app/components/styled';
import { COLORS } from '@/app/styles/theme';
import Image from 'next/image';
import { useState } from 'react';

const HowToPlayPage = () => {
    const [isCopied, setIsCopied] = useState(false);
    const serverInfo = {
      ip: 'mc.CrystalCraft.com.br',
      port: 26780,
      versions: '1.21+'
    };
  
    const handleCopyIP = () => {
      navigator.clipboard.writeText(serverInfo.ip);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

  const javaSteps = [
    {
      title: "1. Abra o Minecraft Java Edition",
      image: "/images/j1.png",
      description: "Inicie o Minecraft em sua versão mais recente"
    },
    {
      title: "2. Acesse Multiplayer",
      image: "/images/j2.png",
      description: "Clique no botão 'Multiplayer' no menu principal"
    },
    {
      title: "3. Adicione o Servidor",
      image: "/images/j3.png",
      description: "Clique em 'Add Server' e insira os dados:"
    },
    {
      title: "4. Conecte-se!",
      image: "/images/j4.png",
      description: "Selecione o servidor e clique em 'Join Server'"
    }
  ];

  const bedrockSteps = [
    {
      title: "1. Abra o Minecraft Bedrock",
      image: "/images/b1.png",
      description: "Certifique-se de estar na versão mais recente"
    },
    {
      title: "2. Acesse Servidores",
      image: "/images/b2.png",
      description: "Vá até a aba 'Servidores' no menu principal"
    },
    {
      title: "3. Adicione o Servidor",
      image: "/images/b3.png",
      description: "Role até o final e clique em 'Add Server' e Preencha com as informações do servidor"
    },
    {
      title: "4. Adicione o Servidor e Jogue",
      image: "/images/b5.png",
      description: "Clique em 'Adicionar Servidor' e depois em 'Jogar' para entrar no servidor",
    }
  ];

  return (
    <PageContainer>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto space-y-8 px-4"
      >
        {/* Cabeçalho com Copy Functionality */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center space-y-4"
        >
          <h1 style={{ 
            fontSize: '2.5rem',
            fontWeight: 800,
            color: COLORS.accent,
            textAlign: 'center',
          }}>
            🎮 Como Jogar no CrystalCraft
          </h1>
          
          <CardContainer>
            <div className="grid md:grid-cols-3 gap-4 text-center items-center">
              <div>
                <h3 style={{ color: COLORS.accent }}>IP do Servidor</h3>
                <div style={{ 
                  display: 'flex'
                }}>
                  <motion.div
                    onClick={handleCopyIP}
                    whileHover={{ scale: 1.05 }}
                    style={{ 
                      cursor: 'pointer',
                      position: 'relative',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      background: `${COLORS.primary}20`,
                      transition: 'background 0.2s'
                    }}
                  >
                    <code style={{ 
                      fontSize: '1.2rem',
                      color: COLORS.text,
                      wordBreak: 'break-all'
                    }}>
                      {serverInfo.ip}
                    </code>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isCopied ? 1 : 0 }}
                      style={{
                        position: 'absolute',
                        bottom: '-25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.8rem',
                        color: COLORS.accent
                      }}
                    >
                      ✓ Copiado!
                    </motion.div>
                  </motion.div>
                  <motion.button
                    onClick={handleCopyIP}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: COLORS.secondary,
                      color: '#fff',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M8 4v12h12V4H8zM6 2h16v16H6V2zM4 6H2v18h18v-2"/>
                    </svg>
                    Copiar
                  </motion.button>
                </div>
              </div>
              
              {/* Restante do código mantido igual */}
              <div>
                <h3 style={{ color: COLORS.accent }}>Porta Bedrock/MCPE</h3>
                <code style={{ 
                  fontSize: '1.2rem',
                  color: COLORS.text
                }}>
                  {serverInfo.port}
                </code>
              </div>
              <div>
                <h3 style={{ color: COLORS.accent }}>Versões Suportadas</h3>
                <p style={{ color: COLORS.text }}>
                  {serverInfo.versions}
                </p>
              </div>
            </div>
          </CardContainer>
        </motion.div>

        {/* Tutorial Java Edition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: COLORS.text,
            margin: '2rem 0',
            textAlign: 'center'
          }}>
            <span style={{ marginRight: '10px' }}>🖥️</span>
            Java Edition
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {javaSteps.map((step, index) => (
              <CardContainer key={index}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <div style={{ 
                    position: 'relative',
                    height: '350px',
                    backgroundColor: '#1a1a1a'
                  }}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.25rem',
                      color: COLORS.accent,
                      marginBottom: '0.5rem'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ color: '#d1d5db' }}>
                      {step.description}
                      {index === 2 && (
                        <div style={{ 
                          marginTop: '1rem',
                          padding: '1rem',
                          background: `${COLORS.primary}20`,
                          borderRadius: '8px'
                        }}>
                          <code style={{ 
                            color: COLORS.text,
                            fontSize: '1.1rem',
                            wordBreak: 'break-all'
                          }}>
                            {serverInfo.ip}
                          </code>
                        </div>
                      )}
                    </p>
                  </div>
                </motion.div>
              </CardContainer>
            ))}
          </div>
        </motion.div>

        {/* Tutorial Bedrock/MCPE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: COLORS.text,
            margin: '2rem 0',
            textAlign: 'center'
          }}>
            <span style={{ marginRight: '10px' }}>📱</span>
            Bedrock Edition / MCPE
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {bedrockSteps.map((step, index) => (
              <CardContainer key={index}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <div style={{ 
                    position: 'relative',
                    height: '350px',
                    backgroundColor: '#1a1a1a'
                  }}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.25rem',
                      color: COLORS.accent,
                      marginBottom: '0.5rem'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ color: '#d1d5db' }}>
                      {step.description}
                      {index === 3 && (
                        <div style={{ 
                          marginTop: '1rem',
                          padding: '1rem',
                          background: `${COLORS.primary}20`,
                          borderRadius: '8px'
                        }}>
                          <div>
                            <code style={{ 
                              color: COLORS.text,
                              fontSize: '1.1rem'
                            }}>
                              IP: {serverInfo.ip}
                            </code>
                          </div>
                          <div style={{ marginTop: '0.5rem' }}>
                            <code style={{ 
                              color: COLORS.text,
                              fontSize: '1.1rem'
                            }}>
                              Porta: {serverInfo.port}
                            </code>
                          </div>
                        </div>
                      )}
                    </p>
                  </div>
                </motion.div>
              </CardContainer>
            ))}
          </div>
        </motion.div>

        {/* Notas Finais */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ 
            textAlign: 'center',
            color: '#9ca3af',
            padding: '2rem 0',
            fontSize: '0.9rem'
          }}
        >
          <h3 style={{ 
            fontSize: '1.25rem',
            color: COLORS.accent,
            marginBottom: '1rem'
          }}>
            ⚠️ Importante
          </h3>
          <p>• Java Edition requer conta premium original ou pirata</p>
          <p>• Bedrock Edition funciona em Xbox, PlayStation, Mobile e Windows 10/11</p>
          <p>• Dúvidas? Contate nosso suporte em discord.gg/crystalcraft</p>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};

export default HowToPlayPage;
