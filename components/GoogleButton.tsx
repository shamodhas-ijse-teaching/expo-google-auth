import React from "react"
import { Pressable, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { MotiView, MotiText } from "moti"

interface GoogleButtonProps {
  onPress: () => void
  label: string
  variant?: "dark" | "outline"
}

export const GoogleButton = ({
  onPress,
  label,
  variant = "dark"
}: GoogleButtonProps) => {
  const isDark = variant === "dark"

  return (
    <MotiView
      from={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "timing", duration: 800 }}
      className="w-full"
    >
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <MotiView
            animate={{
              scale: pressed ? 0.95 : [1, 1.03, 1],
              backgroundColor: isDark
                ? pressed
                  ? "#0f172a"
                  : "#1e293b"
                : pressed
                  ? "#f8fafc"
                  : "#ffffff"
            }}
            transition={{
              scale: pressed
                ? { type: "timing", duration: 100 }
                : { loop: true, duration: 4000 }
            }}
            className={`w-full h-20 flex-row items-center justify-center rounded-[40px] border-2 ${
              isDark
                ? "border-slate-800 shadow-2xl shadow-slate-900"
                : "border-slate-50 shadow-xl shadow-slate-200"
            }`}
          >
            <View className="absolute left-8 flex-row items-center gap-x-1">
              <MotiView
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ loop: true, duration: 2000 }}
                className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-500" : "bg-blue-400"}`}
              />
              <AntDesign
                name="google"
                size={22}
                color={isDark ? "white" : "#0f172a"}
              />
            </View>

            <MotiText
              style={{ fontFamily: "System" }}
              className={`text-xl font-black tracking-tighter ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {label}
            </MotiText>
            <View className="absolute right-8 flex-row gap-x-1.5">
              {[1, 2].map((i) => (
                <MotiView
                  key={i}
                  animate={{
                    translateY: [0, -4, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    loop: true,
                    duration: 1500,
                    delay: i * 200
                  }}
                  className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-indigo-400" : "bg-slate-300"}`}
                />
              ))}
            </View>
          </MotiView>
        )}
      </Pressable>
    </MotiView>
  )
}
