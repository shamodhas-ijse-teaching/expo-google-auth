import { AuthProvider } from "@/context/AuthContext"
import { LoaderProvider } from "@/context/LoaderContext"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Slot } from "expo-router"
import { GlobalLoader } from "@/components/common/GlobalLoader"
import { DevSignature } from "@/components/layout/DevSignature"
import "../global.css"

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <LoaderProvider>
        <AuthProvider>
          <Slot />
          <DevSignature />
          <GlobalLoader />
        </AuthProvider>
      </LoaderProvider>
    </SafeAreaProvider>
  )
}
