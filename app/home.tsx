import React from "react"
import { View, Text, Alert } from "react-native"
import { useAuth } from "@/hooks/useAuth"
import { logoutUser } from "@/services/authService"
import { useRouter } from "expo-router"
import { useLoader } from "@/hooks/useLoader"
import { GoogleButton } from "@/components/GoogleButton"

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()

  const handleLogout = async () => {
    try {
      showLoader()
      await logoutUser()
      router.replace("/login")
    } catch (e) {
      Alert.alert("Error", "Logout failed")
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 bg-slate-50 items-center justify-between py-20 px-8">
      <View className="items-center">
        <Text className="text-4xl font-black text-slate-900 tracking-tighter">
          Home
        </Text>
        <View className="mt-10 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm items-center w-full">
          <Text className="text-slate-400 font-bold text-xs uppercase mb-1">
            Account
          </Text>
          <Text className="text-slate-900 font-bold text-lg">
            {user?.email}
          </Text>
        </View>
      </View>

      <GoogleButton label="Logout" onPress={handleLogout} variant="outline" />
    </View>
  )
}
