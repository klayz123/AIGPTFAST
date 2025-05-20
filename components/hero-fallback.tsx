"use client"

import { useState, useEffect } from "react"
import { HeroSimpleBot } from "@/components/hero-simple-bot"
import { HeroMobileBot } from "@/components/hero-mobile-bot"
import { SvgRobot } from "@/components/svg-robot"
import { UltraSimpleRobot } from "@/components/ultra-simple-robot"
import { useMobile } from "@/hooks/use-mobile"

export function HeroFallback() {
  const [renderAttempt, setRenderAttempt] = useState(0)
  const [renderSuccess, setRenderSuccess] = useState(false)
  const [error, setError] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    // Попытка рендеринга с задержкой
    const timer = setTimeout(() => {
      try {
        setRenderAttempt((prev) => prev + 1)
      } catch (e) {
        setError(true)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [renderAttempt])

  useEffect(() => {
    // Если после 3 попыток не удалось отрендерить, показываем SVG версию
    if (renderAttempt >= 3 && !renderSuccess) {
      setError(true)
    }
  }, [renderAttempt, renderSuccess])

  // Обработчик успешного рендеринга
  const handleRenderSuccess = () => {
    setRenderSuccess(true)
  }

  // Если произошла ошибка или мы на мобильном устройстве, показываем ультра-простую версию
  if (error || renderAttempt > 2) {
    return <UltraSimpleRobot />
  }

  // Для мобильных устройств
  if (isMobile) {
    return (
      <div onLoad={handleRenderSuccess}>
        <HeroMobileBot />
      </div>
    )
  }

  // Для десктопов - пробуем SVG версию
  if (renderAttempt > 1) {
    return (
      <div onLoad={handleRenderSuccess}>
        <SvgRobot />
      </div>
    )
  }

  // Первая попытка - простая версия
  return (
    <div onLoad={handleRenderSuccess}>
      <HeroSimpleBot />
    </div>
  )
}
