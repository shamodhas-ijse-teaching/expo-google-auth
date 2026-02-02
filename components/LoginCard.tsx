import React from "react"
import { View, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { GoogleButton } from "./GoogleButton"

interface Props {
  title: string
  subtitle: string
  onLoginPress: () => void
}

export const LoginCard = ({ title, subtitle, onLoginPress }: Props) => {
  return (
    <View className="w-full bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-50 items-center">
      <View className="w-16 h-16 bg-slate-50 rounded-full items-center justify-center mb-6">
        <AntDesign name="google" size={32} color="#4285F4" />
      </View>
      <Text className="text-3xl font-black text-slate-900 tracking-tighter">
        {title}
      </Text>
      <Text className="text-slate-500 text-center mt-2 mb-10 text-base font-medium">
        {subtitle}
      </Text>
      <GoogleButton label="Continue with Google" onPress={onLoginPress} />
    </View>
  )
}
