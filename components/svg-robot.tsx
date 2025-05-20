"use client"

import { motion } from "framer-motion"

export function SvgRobot() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
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

      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 relative z-10">
        {/* Голографический круг */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#circleGradient)"
          strokeWidth="2"
          strokeDasharray="10,5"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Голова робота */}
        <motion.circle
          cx="100"
          cy="80"
          r="40"
          fill="url(#headGradient)"
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Левый глаз */}
        <motion.circle
          cx="80"
          cy="70"
          r="8"
          fill="#06b6d4"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Правый глаз */}
        <motion.circle
          cx="120"
          cy="70"
          r="8"
          fill="#06b6d4"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        {/* Рот */}
        <motion.rect
          x="85"
          y="95"
          width="30"
          height="5"
          rx="2.5"
          fill="#06b6d4"
          animate={{
            width: [30, 40, 30],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Антенна */}
        <motion.line
          x1="100"
          y1="40"
          x2="100"
          y2="30"
          stroke="#a855f7"
          strokeWidth="3"
          animate={{
            y2: [30, 25, 30],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.circle
          cx="100"
          cy="25"
          r="5"
          fill="#ec4899"
          animate={{
            scale: [1, 1.3, 1],
            filter: [
              "drop-shadow(0 0 2px rgba(236, 72, 153, 0.5))",
              "drop-shadow(0 0 8px rgba(236, 72, 153, 0.8))",
              "drop-shadow(0 0 2px rgba(236, 72, 153, 0.5))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Тело робота */}
        <motion.rect
          x="70"
          y="120"
          width="60"
          height="40"
          rx="10"
          fill="url(#bodyGradient)"
          animate={{
            y: [120, 125, 120],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        {/* Индикаторы на теле */}
        <motion.circle
          cx="85"
          cy="135"
          r="5"
          fill="#06b6d4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.circle
          cx="105"
          cy="135"
          r="5"
          fill="#ec4899"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        <motion.rect
          x="85"
          y="150"
          width="30"
          height="3"
          rx="1.5"
          fill="#06b6d4"
          animate={{
            width: [30, 40, 30],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Цена */}
        <motion.text
          x="100"
          y="185"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="url(#textGradient)"
          animate={{
            y: [185, 180, 185],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          1990₽
        </motion.text>

        {/* Градиенты */}
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>

          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Вращающиеся иконки */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {/* Иконки вокруг робота (упрощенные круги) */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-4 h-4 rounded-full bg-purple-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-4 h-4 rounded-full bg-cyan-400" />
        </motion.div>

        <motion.div
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-pink-900/50 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-4 h-4 rounded-full bg-pink-400" />
        </motion.div>

        <motion.div
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-4 h-4 rounded-full bg-green-400" />
        </motion.div>
      </motion.div>
    </div>
  )
}
