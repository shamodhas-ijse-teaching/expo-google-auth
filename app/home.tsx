import { View, Text, Alert, Image } from "react-native"
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
    } catch (error: any) {
      Alert.alert("Logout Error", error.message)
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 bg-slate-50 px-6 py-16 justify-between">
      <View className="items-center mt-10">
        <Text className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">
          Dashboard
        </Text>
        <Text className="text-4xl font-black text-slate-900 tracking-tighter">
          Home
        </Text>
        <View className="w-full bg-white mt-12 p-6 rounded-[32px] shadow-sm border border-slate-100 items-center">
          <View className="w-20 h-20 bg-slate-100 rounded-full items-center justify-center mb-4 overflow-hidden">
            {user?.photoURL ? (
              <Image
                source={{ uri: user.photoURL }}
                className="w-full h-full"
              />
            ) : (
              <Text className="text-2xl font-bold text-slate-400">
                {user?.email?.charAt(0).toUpperCase()}
              </Text>
            )}
          </View>
          <Text className="text-slate-400 text-sm font-medium">
            Logged in as
          </Text>
          <Text className="text-slate-900 text-lg font-bold mt-1">
            {user?.email}
          </Text>
        </View>
      </View>
      <View className="items-center">
        <GoogleButton
          label="Sign Out"
          onPress={handleLogout}
          variant="outline"
        />
        <Text className="mt-6 text-slate-300 text-xs font-medium">
          App Version 2.0.26
        </Text>
      </View>
    </View>
  )
}
