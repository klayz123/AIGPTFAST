"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Sparkles, ImageIcon, Mic, Brain } from "lucide-react"
import { HeroFallback } from "@/components/hero-fallback"

interface HeroSectionProps {
  openModal: () => void
}

export function HeroSection({ openModal }: HeroSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6 + i * 0.1,
        ease: "easeOut",
      },
    }),
  }

  const features = [
    { icon: <Brain className="w-4 h-4" />, text: "На базе GPT" },
    { icon: <ImageIcon className="w-4 h-4" />, text: "Обработка изображений" },
    { icon: <Mic className="w-4 h-4" />, text: "Распознавание голоса" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Адаптируется под вас" },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10 text-center pt-16 md:pt-8">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            variants={titleVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch-text relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Ваш AI-помощник в Telegram
            </span>
            <motion.span
              className="absolute top-0 right-0 md:-right-12 text-purple-500 opacity-70"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 5, 0],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
            </motion.span>
          </motion.h1>

          <motion.p variants={subtitleVariants} className="text-xl md:text-2xl text-gray-300 mb-4 relative">
            Умный, персональный, всегда на связи.
            <motion.span
              className="absolute -left-12 bottom-0 text-cyan-500 opacity-70 hidden md:block"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, -5, 0],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Bot className="w-10 h-10" />
            </motion.span>
          </motion.p>

          {/* Новый блок с возможностями */}
          <motion.div variants={subtitleVariants} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={featureVariants}
                className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-500/20 flex items-center"
              >
                <span className="mr-1.5 text-purple-400">{feature.icon}</span>
                <span className="text-sm text-gray-200">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={subtitleVariants} className="text-md md:text-lg text-gray-400 mb-8">
            С длительной памятью, которая обучается и подстраивается под ваши потребности и стиль общения
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mt-12">
            <motion.div variants={buttonVariants} className="order-2 md:order-1">
              <div className="relative inline-block">
                <Button
                  onClick={openModal}
                  size="lg"
                  className="relative z-10 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-6 text-lg"
                >
                  <span className="flex items-center">
                    Подключить за 1990₽
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-70 blur-md z-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Animated gradient */}
                <div className="absolute inset-0 overflow-hidden rounded-md z-0">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30"
                    animate={{
                      x: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              className="w-64 h-64 md:w-80 md:h-80 order-1 md:order-2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <HeroFallback />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ArrowRight className="h-8 w-8 rotate-90 text-gray-500" />
      </motion.div>
    </section>
  )
}
