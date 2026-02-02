import { View, Text } from "react-native"
import { MotiView } from "moti"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const DevSignature = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      pointerEvents="none"
      style={{
        position: "absolute",
        bottom: insets.bottom + 10,
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 999
      }}
    >
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 0.5, translateY: 0 }}
        transition={{ delay: 2000, type: "timing", duration: 1000 }}
        className="flex-row items-center gap-x-2"
      >
        <View className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-40" />
        <Text className="text-[9px] font-black text-slate-400 uppercase tracking-[4px]">
          Developed by <Text className="text-slate-900">Shamodha Sahan</Text>
        </Text>
        <View className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-40" />
      </MotiView>
    </View>
  )
}
