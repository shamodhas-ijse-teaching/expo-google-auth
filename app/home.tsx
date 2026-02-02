import { View, Alert, StatusBar, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { useAuth } from "@/hooks/useAuth"
import { useLoader } from "@/hooks/useLoader"
import { logoutUser } from "@/services/authService"
import { MovingBalls } from "@/components/common/MovingBalls"
import { GoogleButton } from "@/components/common/GoogleButton"
import { HomeHeader } from "@/components/home/HomeHeader"
import { IdentityCard } from "@/components/home/IdentityCard"
import { StatusGrid } from "@/components/home/StatusGrid"
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
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="absolute inset-0 opacity-20">
        <MovingBalls intensity={1.2} />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <IdentityCard user={user} />
        <StatusGrid />
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
