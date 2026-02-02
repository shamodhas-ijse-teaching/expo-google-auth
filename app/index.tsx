import { View, ActivityIndicator, StyleSheet } from "react-native"
import { Redirect } from "expo-router"
import { useAuth } from "@/hooks/useAuth"

export default function Index() {
  const { user, loading } = useAuth()
  console.log(user)

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  if (!user) {
    return <Redirect href="/login" />
  }

  return <Redirect href="/home" />
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" }
})
