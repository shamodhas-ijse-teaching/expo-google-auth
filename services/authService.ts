import { GoogleSignin } from "@react-native-google-signin/google-signin"
import {
  GoogleAuthProvider,
  signInWithCredential,
  signOut
} from "firebase/auth"
import { auth } from "./firebase"
import AsyncStorage from "@react-native-async-storage/async-storage"

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  offlineAccess: true
})

export const loginWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices()
    const response = await GoogleSignin.signIn()
    const idToken = response.data?.idToken

    if (!idToken) throw new Error("ID Token missing")

    const credential = GoogleAuthProvider.credential(idToken)
    return await signInWithCredential(auth, credential)
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const logoutUser = async () => {
  try {
    await signOut(auth)
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
    await AsyncStorage.clear()
  } catch (error) {
    console.error(error)
    throw error
  }
}
