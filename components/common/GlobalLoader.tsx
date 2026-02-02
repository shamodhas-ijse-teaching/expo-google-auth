import { View } from "react-native"
import { MotiView } from "moti"
import { useLoader } from "@/hooks/useLoader"
import { AntDesign } from "@expo/vector-icons"

export const GlobalLoader = () => {
  const { isLoading } = useLoader()

  if (!isLoading) return null

  const particles = [
    {
      size: "w-12 h-12",
      color: "bg-slate-900",
      delay: 0,
      x: 70,
      y: -80,
      s: 1.3
    },
    {
      size: "w-8 h-8",
      color: "bg-blue-500",
      delay: 200,
      x: -90,
      y: 40,
      s: 0.9
    },
    {
      size: "w-16 h-16",
      color: "bg-slate-100",
      delay: 400,
      x: 50,
      y: 100,
      s: 1.1
    },
    {
      size: "w-10 h-10",
      color: "bg-red-500",
      delay: 600,
      x: -70,
      y: -90,
      s: 1.0
    },
    {
      size: "w-6 h-6",
      color: "bg-yellow-500",
      delay: 800,
      x: 100,
      y: 10,
      s: 0.8
    },
    {
      size: "w-10 h-10",
      color: "bg-green-500",
      delay: 1000,
      x: -40,
      y: 110,
      s: 1.2
    }
  ]

  return (
    <View className="absolute inset-0 z-[1000] items-center justify-center bg-slate-900">
      <MotiView
        from={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{
          loop: true,
          type: "timing",
          duration: 1200,
          repeatReverse: true
        }}
        className="absolute z-20"
      >
        <AntDesign name="google" size={56} color="#ffffff" />
      </MotiView>
      <View className="w-80 h-80 items-center justify-center">
        {particles.map((p, i) => (
          <MotiView
            key={i}
            from={{
              translateX: 0,
              translateY: 0,
              scale: 0,
              rotate: "0deg",
              opacity: 0
            }}
            animate={{
              translateX: p.x,
              translateY: p.y,
              scale: p.s,
              rotate: "720deg",
              opacity: 1
            }}
            transition={{
              type: "timing",
              duration: 2000,
              loop: true,
              repeatReverse: true,
              delay: p.delay
            }}
            className={`absolute ${p.size} ${p.color} rounded-full border border-white/40 shadow-2xl shadow-slate-400`}
            style={{
              elevation: 15
            }}
          />
        ))}
      </View>
      <View className="absolute bottom-32 w-full items-center">
        <MotiView
          from={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ loop: true, duration: 2000 }}
          className="h-[3px] bg-slate-100 rounded-full overflow-hidden"
        >
          <MotiView
            animate={{ translateX: [-120, 120] }}
            transition={{ loop: true, duration: 1000, type: "timing" }}
            className="h-full w-20 bg-slate-900 rounded-full"
          />
        </MotiView>
      </View>
    </View>
  )
}
