import { AuthProvider } from "@/context/AuthContext"
import { LoaderProvider } from "@/context/LoaderContext"
import { Slot } from "expo-router"
import { GlobalLoader } from "@/components/GlobalLoader"
import "../global.css"

export default function RootLayout() {
  return (
    <LoaderProvider>
      <AuthProvider>
        <Slot />
        <GlobalLoader />
      </AuthProvider>
    </LoaderProvider>
  )
}
