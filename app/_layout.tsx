import { AuthProvider } from "@/context/AuthContext"
import { LoaderProvider } from "@/context/LoaderContext"
import { Slot } from "expo-router"
import "../global.css"
import { Text } from "react-native"

export default function RootLayout() {
  return (
    <LoaderProvider>
      <AuthProvider>
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
        <Slot />
      </AuthProvider>
    </LoaderProvider>
  )
}
