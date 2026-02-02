import { View, Text, StyleSheet, Button } from "react-native"
import { useAuth } from "@/hooks/useAuth"
import { logoutUser } from "@/services/authService"

export default function Home() {
  const { user } = useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.text}>Logged in as: {user?.email}</Text>
      <Button title="Logout" onPress={logoutUser} color="#ff4444" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  text: { fontSize: 16, marginVertical: 20 }
})
