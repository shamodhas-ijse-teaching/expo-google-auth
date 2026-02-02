import React from "react"
import { View, Text, TouchableOpacity, Alert, Image } from "react-native"
import { loginWithGoogle } from "@/services/authService"
import { useRouter } from "expo-router"
import { useLoader } from "@/hooks/useLoader"
import { AntDesign } from "@expo/vector-icons"

export default function LoginScreen() {
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()

  const handleLogin = async () => {
    try {
      showLoader()
      const result = await loginWithGoogle()
      if (result) {
        router.replace("/home")
      }
    } catch (error: any) {
      console.error("Login Failed: ", error)
      Alert.alert(
        "Sign in failed",
        "We couldn't sign you in with Google. Please try again."
      )
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 bg-white px-6">
      <View className="flex-1 justify-center items-center">
        <View className="mb-8">
          <AntDesign name="google" size={64} color="#4285F4" />
        </View>
        <Text className="text-2xl font-semibold text-slate-900">Sign in</Text>
        <Text className="text-slate-500 mt-2 text-base text-center">
          Use your Google Account
        </Text>
      </View>
      <View className="pb-16 items-center">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleLogin}
          className="w-full flex-row items-center justify-center bg-white border border-slate-200 py-3.5 rounded-full shadow-sm"
        >
          <AntDesign name="google" size={18} color="#EA4335" />
          <Text className="text-slate-700 font-medium text-base ml-3">
            Sign in with Google
          </Text>
        </TouchableOpacity>
        <View className="mt-10 flex-row items-center justify-between w-full px-2">
          <Text className="text-slate-500 text-sm font-medium">
            Create account
          </Text>
          <View className="bg-blue-600 px-5 py-2 rounded-lg">
            <Text className="text-white font-medium">Next</Text>
          </View>
        </View>
        <Text className="mt-12 text-slate-400 text-xs text-center leading-5">
          To continue, Google will share your name, email address, language
          preference, and profile picture with this app.
        </Text>
      </View>
    </View>
  )
}
