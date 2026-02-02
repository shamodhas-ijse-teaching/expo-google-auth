import React from "react"
import { View, Alert } from "react-native"
import { useRouter } from "expo-router"
import { loginWithGoogle } from "@/services/authService"
import { useLoader } from "@/hooks/useLoader"
import { LoginCard } from "@/components/LoginCard"

export default function LoginScreen() {
  const router = useRouter()
  const { showLoader, hideLoader, isLoading } = useLoader()

  const handleLogin = async () => {
    if (isLoading) return
    try {
      showLoader()
      const success = await loginWithGoogle()
      if (success) router.replace("/home")
    } catch (error: any) {
      Alert.alert("Auth Failed", "Could not connect to Google.")
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 bg-slate-50 items-center justify-center px-8">
      <LoginCard
        title="Welcome"
        subtitle="Securely sign in to your workspace"
        onLoginPress={handleLogin}
      />
    </View>
  )
}
