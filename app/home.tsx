import { View, Text, StyleSheet, Button, Alert } from "react-native"
import { useAuth } from "@/hooks/useAuth"
import { logoutUser } from "@/services/authService"
import { useRouter } from "expo-router"

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logoutUser()
      router.replace("/login")
    } catch (error: any) {
      Alert.alert("Logout Error", error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <View style={styles.profileBox}>
        <Text style={styles.text}>Logged in as:</Text>
        <Text style={styles.emailText}>{user?.email}</Text>
      </View>

      <Button title="Logout" onPress={handleLogout} color="#ff4444" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  profileBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  text: {
    fontSize: 14,
    color: "#666"
  },
  emailText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 5
  }
})
