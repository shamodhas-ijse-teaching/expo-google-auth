import React from "react"
import { View, Alert, StatusBar } from "react-native"
import { useRouter } from "expo-router"
import { loginWithGoogle } from "@/services/authService"
import { useLoader } from "@/hooks/useLoader"
import { LoginBackground } from "@/components/auth/LoginBackground"
import { LoginCard } from "@/components/auth/LoginCard"

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
      <LoginBackground />
      <LoginCard onLoginPress={handleLogin} />
    </View>
  )
}
