import { View, Text, Image } from "react-native"
import { MotiView } from "moti"

interface IdentityCardProps {
  user: any
}

export const IdentityCard = ({ user }: IdentityCardProps) => (
  <View className="px-6 mb-10">
    <MotiView
      from={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-slate-900 rounded-[50px] p-8 shadow-2xl shadow-slate-400 overflow-hidden"
    >
      <MotiView
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ loop: true, duration: 4000 }}
        className="absolute -right-10 -top-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"
      />
      <View className="flex-row items-center justify-between mb-10">
        <View className="flex-1 mr-4">
          <Text className="text-blue-400 font-black text-[9px] uppercase tracking-[3px] mb-2">
            Active
          </Text>
          <Text
            className="text-white text-3xl font-black tracking-tight leading-8"
            numberOfLines={1}
          >
            {user?.displayName || "Shamodha"}
          </Text>
        </View>
        <MotiView
          animate={{ rotate: ["0deg", "5deg", "0deg"] }}
          transition={{ loop: true, duration: 5000 }}
          className="w-20 h-20 rounded-full border-2 border-slate-700 p-1 bg-slate-800"
        >
          {user?.photoURL ? (
            <Image
              source={{ uri: user.photoURL }}
              className="w-full h-full rounded-full"
            />
          ) : (
            <View className="w-full h-full items-center justify-center">
              <Text className="text-white font-black text-3xl">S</Text>
            </View>
          )}
        </MotiView>
      </View>
      <View className="h-[1px] w-full bg-slate-800 mb-8" />
      <View className="flex-row justify-between items-center">
        <Text className="text-slate-500 font-bold text-xs tracking-tight">
          {user?.email}
        </Text>
        <View className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full">
          <Text className="text-blue-400 text-[8px] font-black uppercase tracking-widest">
            Verified
          </Text>
        </View>
      </View>
    </MotiView>
  </View>
)
