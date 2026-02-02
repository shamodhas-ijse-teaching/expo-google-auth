import React from "react"
import { Pressable, Text, View } from "react-native"
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
      from={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 15 }}
      className="w-full"
    >
      <Pressable onPress={onPress} className="active:scale-95">
        {({ pressed }) => (
          <MotiView
            animate={{
              scale: pressed ? 0.96 : [1, 1.02, 1],
              shadowOpacity: pressed ? 0.1 : 0.2
            }}
            transition={{
              scale: pressed
                ? { type: "timing", duration: 100 }
                : { loop: true, duration: 3000, type: "timing" }
            }}
            className={`w-full flex-row items-center justify-center py-5 rounded-[35px] ${
              isDark
                ? "bg-slate-900 shadow-2xl shadow-slate-900/50"
                : "bg-white border border-slate-100 shadow-xl shadow-slate-200"
            }`}
          >
            <MotiView
              animate={{
                translateX: pressed ? 4 : 0,
                rotate: pressed ? "10deg" : "0deg"
              }}
              className="absolute left-8"
            >
              <AntDesign
                name="google"
                size={22}
                color={isDark ? "white" : "#4285F4"}
              />
            </MotiView>
            <MotiText
              animate={{ opacity: pressed ? 0.7 : 1 }}
              className={`text-lg font-black tracking-tighter ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {label}
            </MotiText>
            <MotiView
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                loop: true,
                duration: 2000,
                type: "timing"
              }}
              className="absolute right-8 w-2 h-2 rounded-full bg-indigo-500"
            />
          </MotiView>
        )}
      </Pressable>
    </MotiView>
  )
}
