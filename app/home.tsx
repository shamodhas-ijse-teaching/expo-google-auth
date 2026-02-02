import React from "react"
import { View, Text, Alert, StatusBar, Image, ScrollView } from "react-native"
import { useAuth } from "@/hooks/useAuth"
import { logoutUser } from "@/services/authService"
import { useRouter } from "expo-router"
import { useLoader } from "@/hooks/useLoader"
import { GoogleButton } from "@/components/GoogleButton"
import { MovingBalls } from "@/components/MovingBalls"
import { MotiView, MotiText } from "moti"

export default function HomeScreen() {
  const { user } = useAuth()
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()

  const handleLogout = async () => {
    try {
      showLoader()
      await logoutUser()
      setTimeout(() => router.replace("/login"), 800)
    } catch (e) {
      Alert.alert("System", "Termination failed.")
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="absolute inset-0 opacity-20">
        <MovingBalls intensity={1.2} />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
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
        <View className="px-6 flex-row gap-x-4">
          {[
            {
              label: "Network",
              color: "bg-slate-100",
              dot: "bg-slate-400",
              text: "text-slate-900"
            },
            {
              label: "Sync",
              color: "bg-blue-600",
              dot: "bg-white",
              text: "text-white"
            }
          ].map((card, idx) => (
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
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 700 }}
          className="px-6 mt-16"
        >
          <GoogleButton
            label="SIGN OUT"
            onPress={handleLogout}
            variant="outline"
          />
        </MotiView>
      </ScrollView>
    </View>
  )
}
