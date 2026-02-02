import { View, Text, Alert, StatusBar, Image } from "react-native"
import { useAuth } from "@/hooks/useAuth"
import { logoutUser } from "@/services/authService"
import { useRouter } from "expo-router"
import { useLoader } from "@/hooks/useLoader"
import { GoogleButton } from "@/components/GoogleButton"
import { MovingBalls } from "@/components/MovingBalls"
import { MotiView } from "moti"

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
    <View className="flex-1 bg-slate-50 items-center justify-between py-24 px-8">
      <StatusBar barStyle="dark-content" />
      <View className="absolute inset-0 opacity-40">
        <MovingBalls intensity={1.5} />
      </View>
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="items-center w-full"
      >
        <Text className="text-slate-400 font-black text-[12px] uppercase tracking-[6px] mb-2">
          Secure Terminal
        </Text>
        <Text className="text-6xl font-black text-slate-900 tracking-tighter">
          Console
        </Text>
      </MotiView>
      <View className="w-full items-center">
        <MotiView
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ loop: true, duration: 4000 }}
          className="absolute w-64 h-64 bg-indigo-500 rounded-full blur-3xl"
        />
        <MotiView
          from={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12 }}
          className="w-full bg-white/60 p-10 rounded-[60px] border border-white/80 items-center shadow-2xl shadow-slate-200"
        >
          <MotiView
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ loop: true, duration: 3000 }}
            className="w-28 h-28 bg-slate-900 rounded-full items-center justify-center mb-6 overflow-hidden border-4 border-white shadow-xl"
          >
            {user?.photoURL ? (
              <Image
                source={{ uri: user.photoURL }}
                className="w-full h-full"
                resizeMode="cover"
              />
            ) : (
              <Text className="text-white text-5xl font-black">
                {user?.email?.charAt(0).toUpperCase()}
              </Text>
            )}
          </MotiView>
          <Text className="text-slate-900 font-black text-2xl tracking-tight text-center">
            {user?.displayName || "Operator"}
          </Text>
          <Text className="text-slate-400 font-medium text-sm mt-1">
            {user?.email}
          </Text>
          <View className="mt-6 px-4 py-1.5 bg-slate-900 rounded-full">
            <Text className="text-white font-bold text-[10px] uppercase tracking-widest">
              Active Sync
            </Text>
          </View>
        </MotiView>
      </View>
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="w-full"
      >
        <GoogleButton
          label="SIGN OUT"
          onPress={handleLogout}
          variant="outline"
        />
        <View className="items-center mt-12 flex-row justify-center gap-x-2 opacity-20">
          <View className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          <View className="w-8 h-1.5 rounded-full bg-slate-900" />
          <View className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
        </View>
      </MotiView>
    </View>
  )
}
