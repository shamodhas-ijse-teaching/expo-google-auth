import { View, Text } from "react-native"
import { MotiView, MotiText } from "moti"

export const HomeHeader = () => (
  <MotiView
    from={{ opacity: 0, translateX: -30 }}
    animate={{ opacity: 1, translateX: 0 }}
    transition={{ type: "timing", duration: 800 }}
    className="px-8 pt-20 pb-10"
  >
    <View className="flex-row items-center mb-1">
      <MotiView
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ loop: true, duration: 2000 }}
        className="w-2 h-2 rounded-full bg-blue-500 mr-2"
      />
      <Text className="text-slate-400 font-black text-[10px] uppercase tracking-[6px]">
        Google Authenticator
      </Text>
    </View>
    <MotiText className="text-7xl font-black text-slate-900 tracking-tighter leading-[60px]">
      Profile
    </MotiText>
  </MotiView>
)
