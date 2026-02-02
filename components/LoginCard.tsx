import { View, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { MotiView } from "moti"
import { GoogleButton } from "./GoogleButton"
import { MovingBalls } from "./MovingBalls"

interface Props {
  title: string
  subtitle: string
  onLoginPress: () => void
}

export const LoginCard = ({ title, subtitle, onLoginPress }: Props) => {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "timing", duration: 1000 }}
      className="w-full bg-white/95 p-10 rounded-[60px] shadow-2xl shadow-slate-300 border border-slate-50 items-center overflow-hidden"
    >
      <View className="absolute inset-0 opacity-40">
        <MovingBalls intensity={1.5} />
      </View>
      <View className="items-center justify-center mb-6 mt-4">
        <View className="bg-white p-6 rounded-full shadow-xl border border-slate-50 z-10">
          <AntDesign name="google" size={48} color="#0f172a" />
        </View>
      </View>
      <View className="items-center mb-12">
        <Text className="text-4xl font-black text-slate-900 tracking-tighter text-center">
          {title}
        </Text>
        <Text className="text-slate-400 text-center mt-2 text-base font-medium px-4">
          {subtitle}
        </Text>
      </View>
      <View className="w-full">
        <GoogleButton label="Continue with Google" onPress={onLoginPress} />
      </View>
      <View className="mt-10 flex-row gap-x-2">
        <View className="w-2 h-2 rounded-full bg-slate-900" />
        <View className="w-2 h-2 rounded-full bg-slate-200" />
        <View className="w-2 h-2 rounded-full bg-slate-100" />
      </View>
    </MotiView>
  )
}
