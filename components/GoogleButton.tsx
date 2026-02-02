import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

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
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`w-full flex-row items-center justify-center py-4 rounded-2xl shadow-sm ${
        isDark
          ? "bg-slate-900 shadow-slate-400"
          : "bg-white border border-slate-200 shadow-slate-200"
      }`}
    >
      <AntDesign name="google" size={18} color={isDark ? "white" : "#EA4335"} />
      <Text
        className={`font-bold text-lg ml-3 ${isDark ? "text-white" : "text-slate-800"}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
