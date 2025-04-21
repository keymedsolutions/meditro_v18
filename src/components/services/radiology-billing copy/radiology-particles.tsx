/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface RadiologyParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export function RadiologyParticles({
  className = "",
  quantity = 40,
  staticity = 50,
  ease = 50,
  refresh = false,
}: RadiologyParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<any[]>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [])

  useEffect(() => {
    initCanvas()
  }, [refresh])

  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = []
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)
    }
  }

  const circleParams = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w)
    const y = Math.floor(Math.random() * canvasSize.current.h)
    const translateX = 0
    const translateY = 0
    const size = Math.floor(Math.random() * 2) + 0.5
    const alpha = 0
    const targetAlpha = Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
    const dx = (Math.random() - 0.5) * 0.2
    const dy = (Math.random() - 0.5) * 0.2
    const magnetism = 0.1 + Math.random() * 4
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    }
  }

  const drawParticles = () => {
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams())
    }
  }

  const remapValue = (value: number, start1: number, end1: number, start2: number, end2: number): number => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
      circles.current.forEach((circle, i) => {
        // Handle the alpha value
        const edge = [
          circle.x + circle.translateX - circle.size, // distance from left edge
          canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
          circle.y + circle.translateY - circle.size, // distance from top edge
          canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
        ]
        const closestEdge = edge.reduce((a, b) => Math.min(a, b))
        const remapClosestEdge = Number.parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2))
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha
          }
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge
        }
        circle.x += circle.dx
        circle.y += circle.dy
        circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease
        circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease
        // Draw circle
        if(context.current){


          context.current.beginPath()
          context.current.arc(circle.x + circle.translateX, circle.y + circle.translateY, circle.size, 0, 2 * Math.PI)
          context.current.fillStyle = `rgba(255, 255, 255, ${circle.alpha})`
          context.current.fill()
        }

        // Reset position if the circle is out of the canvas
        if (
          circle.x < -100 ||
          circle.x > canvasSize.current.w + 100 ||
          circle.y < -100 ||
          circle.y > canvasSize.current.h + 100
        ) {
          // Reset circle
          circles.current[i] = circleParams()
        }
      })
    }
    window.requestAnimationFrame(animate)
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = event.clientX - rect.left - w / 2
      const y = event.clientY - rect.top - h / 2
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }
  }

  return (
    <div ref={canvasContainerRef} onMouseMove={handleMouseMove} className={`tw-absolute tw-inset-0 tw-opacity-70 ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  )
}

