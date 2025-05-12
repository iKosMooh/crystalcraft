'use client';
import { motion } from 'framer-motion';
import { PageContainer, CardContainer } from '@/app/components/styled';
import { COLORS } from '@/app/styles/theme';

const RulesPage = () => {
  const sections = [
    {
      title: "📓 Comportamento na Comunidade",
      icon: "👥",
      items: [
        "Respeito mútuo entre todos os jogadores",
        "Proibido qualquer forma de discriminação",
        "Mantenha o chat positivo e construtivo",
        "Divulgação apenas com autorização"
      ]
    },
    {
      title: "⚔️ Regras de Gameplay",
      icon: "🎮",
      items: [
        "Cheats e modificações ilegais proibidos",
        "Não destrua construções alheias",
        "Respeite áreas demarcadas",
        "Reporte bugs aos administradores"
      ]
    }
  ];

  const punishments = [
    {
      title: "⚠️ Banimento Temporário",
      duration: "72 horas",
      color: "#f59e0b",
      items: [
        "Primeira infração grave",
        "Comportamento tóxico",
        "Uso de mods proibidos"
      ]
    },
    {
      title: "🚫 Banimento Permanente",
      color: "#ef4444",
      items: [
        "Reincidência em violações",
        "Exploits graves",
        "Ameaças ao servidor"
      ]
    }
  ];

  const mods = {
    allowed: [
      "OptiFine",
      "LabyMod 4*",
      "Replay Mod",
      "Shaders (BSL, SEUS)",
      "Cosmetic Mods",
      "Simple Voice Chat",
      "Sodium/Iris",
      "AppleSkin",
      "JourneyMap**",
      "Schematica***",
      "Controllable",
      "Dynamic Lights"
    ],
    forbidden: [
      "XRay (qualquer variante)",
      "CaveFinder/CaveScanner",
      "Entity Radar/ESP",
      "FullBright/Night Vision",
      "Tracers/PlayerESP",
      "Fly Mods (AnyFlight, VoxelFlight)",
      "SpeedHack/NoSlowDown",
      "Spider/Phase Mods",
      "Step/AntiAfk",
      "FreeCam/Ghost Mode",
      "Reach Mod (HitBox+)/AutoAttack",
      "TriggerBot/Aimbot",
      "AntiKnockback/Velocity",
      "AutoPot/Refill",
      "Critical+ (Critical Hack)",
      "Baritone (Auto-Mining/Building)",
      "AutoClicker (Right/Left)",
      "Macro Mods (qualquer automação)",
      "AutoFish/AutoFarm",
      "Inventory Sorter/AutoSorter",
      "World Downloader",
      "SeedCracker",
      "Chunk Analyzer",
      "Biome Finder",
      "Wurst Client",
      "Aristois Client",
      "FDPClient",
      "Impact Client",
      "RusherHack",
      "BetterPvP/BetterCombat",
      "Inventory Tweaks",
      "ToroHealth Damage Indicator",
      "Bettersprint/SprintToggle",
      "MiniMap com Radar (VoxelMap, Rei's)",
      "Schematica Printer",
      "ItemESP/ContainerESP",
      "AutoTotem/AutoArmor",
      "HitBox Expandido",
      "Timer Mod (Aceleração de GameTick)"
    ],
    notes: [
      "⚠️ Mods não listados estão sujeitos à análise da equipe",
      "⚠️ Configurações de PvP com CPS acima de 20 são consideradas macros",
      "⚠️ Texturas que simulam XRay resultam em ban permanente",
      "✅ Mods de acessibilidade devem ser previamente autorizados",
      "✅ Mods de gravação/stream são permitidos sem recursos automáticos"
    ]
  };

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto space-y-8 px-4"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center space-y-4"
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: COLORS.accent,
            textShadow: `0 2px 4px ${COLORS.secondary}40`,
            textAlign: 'center',
          }}>
            🛡️ Regras do Servidor
          </h1>
          <p style={{
            color: '#d1d5db',
            fontSize: '1.1rem',
            lineHeight: 1.5,
            textAlign: 'center',
          }}>
            Mantenha nossa comunidade segura e divertida para todos
          </p>
        </motion.div>

        {/* Regras Principais */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {sections.map((section, index) => (
            <CardContainer
              key={index}
            >
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: COLORS.text
                  }}>
                    {section.title}
                  </h2>
                </div>
                <ul style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                  display: 'grid',
                  gap: '0.75rem'
                }}>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#e5e7eb',
                        fontSize: '1rem'
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: COLORS.secondary
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContainer>
          ))}
        </motion.div>

        {/* Sistema de Punções */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="space-y-6"
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: COLORS.text,
            textAlign: 'center',
            margin: '2rem 0'
          }}>
            🚨 Sistema de Penalidades
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {punishments.map((punishment, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                style={{
                  background: punishment.color + '15',
                  border: `2px solid ${punishment.color}30`,
                  borderRadius: '12px',
                  padding: '1.5rem'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: punishment.color,
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: '1.2rem'
                  }}>
                    {index === 0 ? '⏳' : '🔒'}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: punishment.color
                  }}>
                    {punishment.title}
                  </h3>
                </div>
                <ul style={{
                  listStyle: 'none',
                  paddingLeft: '1rem'
                }}>
                  {punishment.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: '0.5rem',
                        color: '#e5e7eb',
                        position: 'relative'
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        left: '-1rem',
                        top: '0.35rem',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: punishment.color
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mods Permitidos/Proibidos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            background: `linear-gradient(45deg, ${COLORS.primary} 0%, ${COLORS.background} 100%)`,
            borderRadius: '16px',
            padding: '2rem',
            marginTop: '2rem'
          }}
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: COLORS.text,
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            🧰 Modificações Permitidas/Proibidas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  background: '#10b981',
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  ✔️
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#10b981'
                }}>
                  Clientes Permitidos
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                paddingLeft: 0,
                display: 'grid',
                gap: '0.5rem'
              }}>
                {mods.allowed.map((mod, i) => (
                  <li
                    key={i}
                    style={{
                      padding: '0.5rem',
                      background: '#05966920',
                      borderRadius: '8px',
                      color: '#6ee7b7'
                    }}
                  >
                    {mod}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  background: '#ef4444',
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  ✖️
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#ef4444'
                }}>
                  Clientes Proibidos
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                paddingLeft: 0,
                display: 'grid',
                gap: '0.5rem'
              }}>
                {mods.forbidden.map((mod, i) => (
                  <li
                    key={i}
                    style={{
                      padding: '0.5rem',
                      background: '#ef444420',
                      borderRadius: '8px',
                      color: '#fca5a5'
                    }}
                  >
                    {mod}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Seção de Notas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            background: `linear-gradient(45deg, ${COLORS.primary} 0%, ${COLORS.background} 100%)`,
            borderRadius: '16px',
            padding: '2rem',
            marginTop: '2rem'
          }}
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: COLORS.text,
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            📌 Notas Importantes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div style={{ color: '#fca5a5' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                ⚠️ Avisos
              </h3>
              <ul style={{
                listStyle: 'none',
                paddingLeft: '1rem',
                display: 'grid',
                gap: '0.75rem'
              }}>
                {mods.notes
                  .filter(note => note.startsWith('⚠️'))
                  .map((note, i) => (
                    <li key={i} style={{
                      padding: '0.75rem',
                      background: '#ef444410',
                      borderRadius: '8px',
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'center'
                    }}>
                      <span>•</span>
                      {note}
                    </li>
                  ))}
              </ul>
            </div>

            <div style={{ color: '#6ee7b7' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                ✅ Permissões
              </h3>
              <ul style={{
                listStyle: 'none',
                paddingLeft: '1rem',
                display: 'grid',
                gap: '0.75rem'
              }}>
                {mods.notes
                  .filter(note => note.startsWith('✅'))
                  .map((note, i) => (
                    <li key={i} style={{
                      padding: '0.75rem',
                      background: '#05966910',
                      borderRadius: '8px',
                      display: 'flex',
                      gap: '0.5rem',
                      alignItems: 'center'
                    }}>
                      <span>•</span>
                      {note}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          style={{
            textAlign: 'center',
            color: '#9ca3af',
            padding: '2rem 0',
            fontSize: '0.9rem'
          }}
        >
          <p>Última atualização: 25/03/2024</p>
          <p>Regras sujeitas a alterações sem aviso prévio</p>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};

export default RulesPage;