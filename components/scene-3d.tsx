"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, MeshDistortMaterial, Text, RoundedBox } from "@react-three/drei"
import { motion } from "framer-motion-3d"
import { MotionConfig } from "framer-motion"

// Компонент робота
function RobotModel({ hover }) {
  const headRef = useRef()
  const bodyRef = useRef()
  const eyeLeftRef = useRef()
  const eyeRightRef = useRef()
  const antennaRef = useRef()

  // Анимация робота
  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Плавное покачивание головы
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.5) * 0.1
      headRef.current.position.y = Math.sin(t) * 0.05 + 1.5
    }

    // Плавное покачивание тела
    if (bodyRef.current) {
      bodyRef.current.position.y = Math.sin(t * 1.5) * 0.03
    }

    // Мигание глаз
    if (eyeLeftRef.current && eyeRightRef.current) {
      const blink = Math.sin(t * 3) > 0.95
      eyeLeftRef.current.scale.y = blink ? 0.1 : 1
      eyeRightRef.current.scale.y = blink ? 0.1 : 1
    }
  })

  return (
    <group>
      {/* Голова робота */}
      <group ref={headRef} position={[0, 1.5, 0]}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial color="#8b5cf6" speed={2} distort={0.2} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Глаза */}
        <mesh ref={eyeLeftRef} position={[-0.2, 0.1, 0.4]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </mesh>
        <mesh ref={eyeRightRef} position={[0.2, 0.1, 0.4]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </mesh>

        {/* Рот */}
        <mesh position={[0, -0.15, 0.4]}>
          <boxGeometry args={[0.25, 0.03, 0.05]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
        </mesh>

        {/* Антенна */}
        <group ref={antennaRef} position={[0, 0.5, 0]}>
          <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.2, 16]} />
            <meshStandardMaterial color="#d946ef" />
          </mesh>
          <mesh position={[0, 0.25, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#d946ef" emissive="#d946ef" emissiveIntensity={1} />
          </mesh>
          <pointLight position={[0, 0.25, 0]} color="#d946ef" intensity={2} distance={1} />
        </group>
      </group>

      {/* Тело робота */}
      <group ref={bodyRef} position={[0, 0.7, 0]}>
        <mesh>
          <RoundedBox args={[0.8, 0.6, 0.4]} radius={0.1}>
            <meshStandardMaterial color="#7c3aed" metalness={0.6} roughness={0.3} />
          </RoundedBox>
        </mesh>

        {/* Кнопки и индикаторы */}
        <group position={[0, 0, 0.21]}>
          <mesh position={[-0.2, 0.1, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0.2, 0.1, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <boxGeometry args={[0.3, 0.03, 0.01]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
          </mesh>
        </group>
      </group>

      {/* Ноги */}
      <mesh position={[-0.2, 0.3, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color="#6d28d9" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0.2, 0.3, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color="#6d28d9" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  )
}

// Компонент голографического интерфейса
function HolographicInterface({ hover }) {
  const ringRef = useRef()

  // Анимация интерфейса
  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Вращение кольца
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.2
      ringRef.current.rotation.x = Math.sin(t * 0.4) * 0.3
    }
  })

  return (
    <group>
      {/* Голографическое кольцо */}
      <motion.mesh
        ref={ringRef}
        animate={{
          scale: hover ? 1.1 : 1,
          rotateZ: hover ? 0.2 : 0,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} transparent opacity={0.7} />
      </motion.mesh>

      {/* Внутреннее кольцо */}
      <motion.mesh
        animate={{
          rotateY: 2 * Math.PI,
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <torusGeometry args={[1.5, 0.03, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} transparent opacity={0.5} />
      </motion.mesh>

      {/* Сфера данных */}
      <motion.mesh
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
          transparent
          opacity={0.1}
          wireframe
        />
      </motion.mesh>

      {/* Частицы данных */}
      {Array(10)
        .fill()
        .map((_, i) => (
          <motion.mesh
            key={i}
            position={[(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3]}
            animate={{
              y: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3 + 1, (Math.random() - 0.5) * 3],
              x: [(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3 + 0.5, (Math.random() - 0.5) * 3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#8b5cf6" : "#06b6d4"}
              emissive={i % 2 === 0 ? "#8b5cf6" : "#06b6d4"}
              emissiveIntensity={2}
            />
          </motion.mesh>
        ))}
    </group>
  )
}

// Основной компонент 3D-сцены
function Scene({ isHovered }) {
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <group>
        {/* Голографический интерфейс */}
        <HolographicInterface hover={isHovered} />

        {/* Робот */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <RobotModel hover={isHovered} />
        </Float>

        {/* Текст 3D */}
        <motion.group
          position={[0, -1.5, 0]}
          animate={{
            y: isHovered ? -1.3 : -1.5,
          }}
        >
          <Text
            font="/fonts/Inter-Bold.ttf"
            fontSize={0.3}
            position={[0, 0, 0]}
            color="#8b5cf6"
            anchorX="center"
            anchorY="middle"
          >
            1990₽
          </Text>
        </motion.group>
      </group>

      {/* Окружение и освещение */}
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
    </MotionConfig>
  )
}

// Экспортируемый компонент
export default function Scene3D({ isHovered }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Scene isHovered={isHovered} />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
    </Canvas>
  )
}
