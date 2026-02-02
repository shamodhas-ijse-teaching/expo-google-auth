import { View } from "react-native"
import { MotiView } from "moti"
import { MovingBalls } from "../common/MovingBalls"

export const LoginBackground = () => (
  <>
    <View className="absolute inset-0 opacity-50">
      <MovingBalls intensity={2.2} />
    </View>

    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2000 }}
      className="absolute top-[-50] right-[-50] w-[300] h-[300] bg-blue-100 rounded-full blur-3xl"
      style={{ borderRadius: 150 }}
    />
  </>
)
