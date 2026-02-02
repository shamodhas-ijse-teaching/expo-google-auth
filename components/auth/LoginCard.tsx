import { View, Text } from "react-native"
import { MotiView, MotiText } from "moti"
import { GoogleButton } from "../common/GoogleButton"

interface LoginCardProps {
  onLoginPress: () => void
}

export const LoginCard = ({ onLoginPress }: LoginCardProps) => {
  return (
    <MotiView
      from={{ opacity: 0, scale: 0.9, translateY: 20 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ type: "spring", damping: 15 }}
      className="w-full items-center"
    >
      <View className="flex-row items-center mb-6">
        <MotiView
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{ loop: true, duration: 2500 }}
          className="w-2 h-2 rounded-full bg-blue-500 mr-3 shadow-lg shadow-blue-200"
        />
        <Text className="text-slate-400 font-black text-[10px] uppercase tracking-[6px]">
          Google Cloud Platform
        </Text>
      </View>
      <MotiText className="text-7xl font-black text-slate-900 tracking-tighter mb-4 text-center leading-[70px]">
        OAuth 2.0
      </MotiText>
      <View className="items-center px-4 mb-14">
        <Text className="text-slate-500 text-center font-bold text-xs uppercase tracking-[2px] mb-2 opacity-60">
          Protocol Initialized
        </Text>
        <Text className="text-slate-400 text-center font-medium leading-5 px-6">
          Establish a secure handshake with your cloud infrastructure
        </Text>
      </View>
      <View className="w-full px-2">
        <GoogleButton label="SIGN IN" onPress={onLoginPress} variant="dark" />
      </View>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1000 }}
        className="mt-8 flex-row items-center opacity-30"
      >
        <View className="w-1 h-1 bg-slate-400 rounded-full mr-2" />
        <Text className="text-[8px] font-black text-slate-500 uppercase tracking-[3px]">
          AES-256 Encrypted
        </Text>
      </MotiView>
    </MotiView>
  )
}
