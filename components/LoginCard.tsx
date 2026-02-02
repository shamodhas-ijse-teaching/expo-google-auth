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
      transition={{ type: "timing", duration: 1200 }}
      className="w-full items-center justify-center py-10"
    >
      <View className="absolute inset-0 items-center justify-center">
        <MovingBalls intensity={2.5} />
      </View>
      <MotiView
        animate={{ translateY: [0, -20, 0] }}
        transition={{ loop: true, duration: 1000, type: "timing" }}
        className="mb-10 z-10"
      >
        <View className="bg-slate-900 p-8 rounded-[40px] rotate-12 shadow-2xl shadow-indigo-500/20">
          <AntDesign name="google" size={42} color="white" />
        </View>
      </MotiView>
      <View className="items-center mb-16 px-6">
        <Text className="text-5xl font-black text-slate-900 tracking-tighter text-center leading-[50px]">
          {title}
        </Text>
        <View className="h-1 w-12 bg-indigo-600 rounded-full my-6 opacity-30" />
        <Text className="text-slate-500 text-center text-lg font-medium tracking-tight px-8">
          {subtitle}
        </Text>
      </View>
      <View className="w-full px-6">
        <GoogleButton label="Sign in" onPress={onLoginPress} variant="dark" />
      </View>
      <View className="mt-16 h-1 w-32 bg-slate-100 rounded-full overflow-hidden">
        <MotiView
          animate={{ translateX: [-100, 100] }}
          transition={{ loop: true, duration: 2000, type: "timing" }}
          className="h-full w-12 bg-slate-900 rounded-full"
        />
      </View>
    </MotiView>
  )
}
