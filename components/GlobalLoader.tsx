import React from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import { useLoader } from "@/hooks/useLoader"

export const GlobalLoader = () => {
  const { isLoading } = useLoader()

  return isLoading ? (
    <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center bg-black/30">
      <View className="bg-white p-6 rounded-2xl shadow-lg">
        <ActivityIndicator size="large" color="#1e40af" />
      </View>
    </View>
  ) : null
}
