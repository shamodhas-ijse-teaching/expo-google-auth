import { View } from "react-native"
import { MotiView } from "moti"

interface Particle {
  size: string
  color: string
  delay: number
  x: number
  y: number
  s: number
}

export const MovingBalls = ({ intensity = 1 }: { intensity?: number }) => {
  const particles: Particle[] = [
    {
      size: "w-14 h-14",
      color: "bg-slate-900",
      delay: 0,
      x: 80,
      y: -90,
      s: 1.2
    },
    {
      size: "w-8 h-8",
      color: "bg-blue-600",
      delay: 200,
      x: -100,
      y: 30,
      s: 0.9
    },
    {
      size: "w-16 h-16",
      color: "bg-slate-200",
      delay: 400,
      x: 60,
      y: 110,
      s: 1.1
    },
    {
      size: "w-10 h-10",
      color: "bg-red-500",
      delay: 600,
      x: -80,
      y: -100,
      s: 1.0
    },
    {
      size: "w-6 h-6",
      color: "bg-yellow-500",
      delay: 800,
      x: 110,
      y: 10,
      s: 0.8
    },
    {
      size: "w-10 h-10",
      color: "bg-green-500",
      delay: 1000,
      x: -40,
      y: 120,
      s: 1.2
    }
  ]

  return (
    <View
      className="items-center justify-center absolute inset-0"
      pointerEvents="none"
    >
      {particles.map((p, i) => (
        <MotiView
          key={i}
          from={{ translateX: 0, translateY: 0, scale: 0, opacity: 0 }}
          animate={{
            translateX: p.x * intensity,
            translateY: p.y * intensity,
            scale: p.s,
            opacity: 0.9,
            rotate: "360deg"
          }}
          transition={{
            type: "timing",
            duration: 2500,
            loop: true,
            repeatReverse: true,
            delay: p.delay
          }}
          className={`absolute ${p.size} ${p.color} rounded-full border-2 border-white/30 shadow-2xl`}
        />
      ))}
    </View>
  )
}
