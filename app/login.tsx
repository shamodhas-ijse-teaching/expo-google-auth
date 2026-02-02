import { View, Text, Alert } from "react-native"
import { loginWithGoogle } from "@/services/authService"
import { useRouter } from "expo-router"
import { useLoader } from "@/hooks/useLoader"
import { AntDesign } from "@expo/vector-icons"
import { GoogleButton } from "@/components/GoogleButton"

export default function LoginScreen() {
  const router = useRouter()
  const { isLoading, showLoader, hideLoader } = useLoader()

  const handleLogin = async () => {
    if (isLoading) return
    try {
      showLoader()
      const result = await loginWithGoogle()
      if (result) {
        router.replace("/home")
      }
    } catch (error: any) {
      console.error("Login Failed: ", error)
      Alert.alert("Sign in failed", "We couldn't sign you in with Google.")
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 bg-slate-50 justify-center px-8">
      <View className="bg-white p-8 rounded-[40px] shadow-xl shadow-slate-200 border border-slate-100 items-center">
        <View className="w-20 h-20 bg-slate-50 rounded-full items-center justify-center mb-6">
          <AntDesign name="google" size={40} color="#4285F4" />
        </View>
        <Text className="text-3xl font-bold text-slate-900 tracking-tight">
          Welcome
        </Text>
        <Text className="text-slate-500 mt-2 mb-10 text-center text-base">
          Sign in with Google to get started
        </Text>
        <GoogleButton
          label="Continue with Google"
          onPress={handleLogin}
          variant="dark"
        />
      </View>
      <Text className="text-center text-slate-300 mt-8 text-xs font-medium uppercase tracking-widest">
        Secure Authentication
      </Text>
    </View>
  )
}
