'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Importando o Link do Next.js

const Footer = () => {
    const [copySuccess, setCopySuccess] = useState(false);

    // Função para copiar o IP
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 3000); // Reseta a mensagem após 3 segundos
        }).catch((err) => console.error('Erro ao copiar:', err));
    };

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.footerContainer}
        >
            {/* Barra superior decorativa */}
            <div className={styles.topBorder}></div>

            <div className={styles.footerContent}>
                {/* Seção do Logo */}
                <motion.div
                    className={styles.logoSection}
                    whileHover={{ scale: 1.02 }}
                >
                    <Image
                        src='/images/CrystalCraft1.png'
                        alt="CrystalCraft Logo"
                        width={160} // Defina a largura desejada
                        height={40} // Defina a altura desejada
                        style={{
                            borderRadius: '8px',
                        }}
                    />
                    <div className={styles.logoText}>
                        <p className={styles.tagline}>Sua aventura minecraft começa aqui</p>
                        <p className={styles.version}>Versão do servidor 1.21!</p>
                        <p className={styles.version}>IP:
                            <span
                                onClick={() => copyToClipboard('MC.CrystalCraft.com.br')}
                                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                MC.CrystalCraft.com.br
                            </span>
                            <br /><b>porta para o bedrock 26780</b>
                        </p>
                        {copySuccess && <p className={styles.copyMessage} id='copied'>✔ IP copiado!</p>}
                    </div>
                </motion.div>

                {/* Seção de Conteúdo */}
                <div className={styles.contentSection}>
                    {/* Grupos de Links */}
                    <div className={styles.linksContainer}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={styles.linkGroup}
                        >
                            <h3 className={styles.sectionTitle}>Navegação</h3>
                            <Link href="/" className={styles.link}>Início</Link>
                            <Link href="#" className={styles.link}>Atualizações</Link>
                            <Link href="#" className={styles.link}>Mapas</Link>
                            <Link href="https://discord.com/invite/KJgDgnusWD" className={styles.link} target='_blank'>Suporte</Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={styles.linkGroup}
                        >
                            <h3 className={styles.sectionTitle}>Legal</h3>
                            <Link href="/pages/rules" className={styles.link}>Regras</Link>
                            <Link href="#" className={styles.link}>Termos</Link>
                        </motion.div>
                    </div>

                    {/* Créditos e Redes Sociais */}
                    <div className={styles.creditsSection}>
                        <div className={styles.socialLinks}>
                            <motion.a href="#" whileHover={{ scale: 1.1 }} className={styles.socialLink}>
                                <Image
                                    src="/images/dc.png"
                                    alt="Discord"
                                    width={24} // Defina a largura desejada
                                    height={24} // Defina a altura desejada
                                    className={styles.socialIcon}
                                />
                            </motion.a>

                        </div>

                        <div className={styles.credits}>
                            <p>Desenvolvido por Caio Magalhães de Souza</p>
                            <p>© 2025 CrystalCraft - Todos os direitos reservados</p>
                            <p className={styles.legalText}>
                                Não afiliado à Mojang AB ou Microsoft. Contribuições mantêm o servidor online.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
