"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Html, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { motion } from "framer-motion"
import { Bot, User } from "lucide-react"

function BotModel() {
  const meshRef = useRef<any>()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <group ref={meshRef}>
      {/* Голова бота */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>

      {/* Глаза */}
      <Sphere args={[0.2, 16, 16]} position={[-0.4, 0.2, 0.85]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[0.4, 0.2, 0.85]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
      </Sphere>

      {/* Антенна */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="#d946ef" />
      </mesh>
      <Sphere args={[0.1, 16, 16]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#d946ef" emissive="#d946ef" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  )
}

function ChatBubbles() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const messages = [
    { text: "Привет! Чем я могу помочь?", sender: "bot" },
    { text: "Мне нужна информация о продукте", sender: "user" },
    { text: "Конечно! Вот подробное описание...", sender: "bot" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Html position={[0, 2.5, 0]} transform occlude>
      <div className="w-64 pointer-events-none">
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
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
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
    </Html>
  )
}

export function ChatBot3D() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <BotModel />
          <ChatBubbles />
        </Float>

        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
