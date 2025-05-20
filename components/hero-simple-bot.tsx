"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, User, Zap, BrainCircuit, Sparkles } from "lucide-react"

export function HeroSimpleBot() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Сообщения для чата
  const messages = [
    { text: "Привет! Я ваш AI-ассистент в Telegram", sender: "bot" },
    { text: "Как ты можешь мне помочь?", sender: "user" },
    { text: "Я могу отвечать на вопросы, искать информацию и помогать с задачами", sender: "bot" },
    { text: "Сколько стоит подключение?", sender: "user" },
    { text: "Всего 1990₽ за полный доступ!", sender: "bot" },
  ]

  // Анимация сообщений
  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [messages.length])

  if (!mounted) return null

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Чат-пузыри */}
      <div className="absolute top-0 left-0 right-0 -mt-24 md:-mt-28 z-10">
        <div className="flex flex-col space-y-2">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex items-start gap-2 mb-2 ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: currentMessage === index ? 1 : 0,
                y: currentMessage === index ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  message.sender === "bot"
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                {message.text}
              </div>
              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Робот */}
      <div className="relative w-full h-full">
        {/* Фоновое свечение */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Голографический круг */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"
            animate={{
              background: [
                "linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))",
                "linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))",
                "linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Горизонтальные линии голограммы */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute w-full h-px bg-cyan-400/30"
              style={{ top: `${(i + 1) * 10}%` }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scaleX: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            />
          ))}

          {/* Вертикальные линии голограммы */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="absolute h-full w-px bg-purple-400/30"
              style={{ left: `${(i + 1) * 10}%` }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scaleY: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            />
          ))}

          {/* Частицы данных */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -20, -40],
                x: [0, i % 2 === 0 ? 10 : -10],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Анимированный робот */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-40 h-40"
              animate={{
                scale: [1, 1.05, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {/* Голова робота */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-b from-purple-500 to-purple-700"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0.7)",
                    "0 0 10px rgba(139, 92, 246, 0.5)",
                  ],
                  rotateY: [0, 10, 0, -10, 0],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                  rotateY: {
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  },
                }}
              >
                {/* Глаза */}
                <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-cyan-400">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-300"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </div>
                <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-cyan-400">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-300"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                  />
                </div>

                {/* Рот */}
                <motion.div
                  className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-cyan-400 rounded-full"
                  animate={{
                    width: ["40%", "60%", "40%"],
                    height: ["4%", "8%", "4%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Антенна */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-1 h-6 bg-purple-400"
                  animate={{
                    height: [6, 8, 6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <motion.div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-pink-500"
                    animate={{
                      boxShadow: [
                        "0 0 5px rgba(236, 72, 153, 0.5)",
                        "0 0 15px rgba(236, 72, 153, 0.8)",
                        "0 0 5px rgba(236, 72, 153, 0.5)",
                      ],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Тело робота */}
              <motion.div
                className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-20 rounded-xl bg-gradient-to-b from-purple-700 to-purple-900"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                {/* Кнопки и индикаторы */}
                <div className="absolute top-1/4 left-1/4 grid grid-cols-2 gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-cyan-400"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-pink-400"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-400"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-400"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1.5,
                    }}
                  />
                </div>

                {/* Центральный индикатор */}
                <motion.div
                  className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-8 h-2 rounded-full bg-cyan-400"
                  animate={{
                    width: ["30%", "50%", "30%"],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Круговой индикатор активности */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-500/30"
            animate={{
              boxShadow: [
                "0 0 10px rgba(139, 92, 246, 0.3) inset",
                "0 0 30px rgba(139, 92, 246, 0.5) inset",
                "0 0 10px rgba(139, 92, 246, 0.3) inset",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Вращающиеся иконки вокруг робота */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-900/50 p-2 rounded-full"
              whileHover={{ scale: 1.2 }}
            >
              <BrainCircuit className="w-5 h-5 text-purple-300" />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-cyan-900/50 p-2 rounded-full"
              whileHover={{ scale: 1.2 }}
            >
              <Zap className="w-5 h-5 text-cyan-300" />
            </motion.div>
            <motion.div
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-900/50 p-2 rounded-full"
              whileHover={{ scale: 1.2 }}
            >
              <Sparkles className="w-5 h-5 text-pink-300" />
            </motion.div>
            <motion.div
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-green-900/50 p-2 rounded-full"
              whileHover={{ scale: 1.2 }}
            >
              <Bot className="w-5 h-5 text-green-300" />
            </motion.div>
          </motion.div>
        </div>

        {/* 3D-текст с ценой */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
          animate={{
            y: isHovered ? "40%" : "50%",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            1990₽
          </div>
        </motion.div>
      </div>
    </div>
  )
}
