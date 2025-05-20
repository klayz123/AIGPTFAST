"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Функция для определения мобильного устройства
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

      // Проверяем User Agent и ширину экрана
      const isMobileDevice = mobileRegex.test(userAgent) || window.innerWidth < 768
      setIsMobile(isMobileDevice)
    }

    // Проверяем при монтировании
    checkMobile()

    // Проверяем при изменении размера окна
    window.addEventListener("resize", checkMobile)

    // Очистка
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
