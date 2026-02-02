import { View, Alert, StatusBar } from "react-native"
import { useRouter } from "expo-router"
import { loginWithGoogle } from "@/services/authService"
import { useLoader } from "@/hooks/useLoader"
import { LoginCard } from "@/components/LoginCard"
import { MovingBalls } from "@/components/MovingBalls"
import { MotiView } from "moti"

export default function LoginScreen() {
  const router = useRouter()
  const { showLoader, hideLoader, isLoading } = useLoader()

  const handleLogin = async () => {
    if (isLoading) return
    try {
      showLoader()
      const success = await loginWithGoogle()
      if (success) {
        setTimeout(() => router.replace("/home"), 800)
      }
    } catch (error: any) {
      Alert.alert("Authentication", "Google sync interrupted.")
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 bg-slate-50 items-center justify-center px-8">
      <StatusBar barStyle="dark-content" />
      <View className="absolute inset-0 opacity-50">
        <MovingBalls intensity={2.2} />
      </View>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2000 }}
        className="absolute top-[-50] right-[-50] w-[300] h-[300] bg-blue-100 rounded-full blur-3xl"
        style={{ borderRadius: 150 }}
      />
      <LoginCard
        title="Connect"
        subtitle="Access your intelligent cloud workspace"
        onLoginPress={handleLogin}
      />
      <MotiView
        from={{ opacity: 0, translateY: 20 }} 
        animate={{ opacity: 1, translateY: 0 }} 
        transition={{ delay: 1000, type: "spring" }}
        className="absolute bottom-12 items-center"
      >
        <View className="flex-row items-center gap-x-3">
          <View className="w-8 h-[1.5px] bg-slate-200 rounded-full" />
          <View className="flex-row gap-x-1.5">
            <View className="w-2 h-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-200" />
            <View className="w-2 h-2 rounded-full bg-slate-300" />
          </View>
          <View className="w-8 h-[1.5px] bg-slate-200 rounded-full" />
        </View>
      </MotiView>
    </View>
  )
}
