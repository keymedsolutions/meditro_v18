/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas:any = canvasRef.current

    //@ts-ignore
    const ctx = canvas.getContext("2d")

    let animationFrameId:any
    
    let particles: { x: number; y: number; radius: number; color: string; speedX: number; speedY: number }[] = []

    const resizeCanvas = () => {
      if(canvas){
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        initParticles()

      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor(window.innerWidth / 20)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 255)}, 0.3)`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId as any)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
