import { View, Text } from "react-native"
import { MotiView } from "moti"

const CARDS = [
  {
    label: "Network",
    color: "bg-slate-100",
    dot: "bg-slate-400",
    text: "text-slate-900"
  },
  { label: "Sync", color: "bg-blue-600", dot: "bg-white", text: "text-white" }
]

export const StatusGrid = () => (
  <View className="px-6 flex-row gap-x-4">
    {CARDS.map((card, idx) => (
      <MotiView
        key={idx}
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 400 + idx * 100 }}
        className={`flex-1 h-36 ${card.color} rounded-[45px] p-6 justify-between shadow-sm`}
      >
        <View className="w-10 h-10 bg-white/10 rounded-full items-center justify-center">
          <View className={`w-2.5 h-2.5 ${card.dot} rounded-full`} />
        </View>
        <Text
          className={`${card.text} font-black text-[10px] uppercase tracking-[4px]`}
        >
          {card.label}
        </Text>
      </MotiView>
    ))}
  </View>
)
