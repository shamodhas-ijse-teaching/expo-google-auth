import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { loginWithGoogle } from "@/services/authService"
import { useRouter } from "expo-router"

export default function LoginScreen() {
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const result = await loginWithGoogle()

      if (result) {
        router.replace("/home")
      }
    } catch (error: any) {
      console.error("Login Failed: ", error)
      Alert.alert("Login Error", error.message || "Something went wrong")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444"
  }
})
