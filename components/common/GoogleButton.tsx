import { Pressable, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { MotiView, MotiText } from "moti"

interface GoogleButtonProps {
  onPress: () => void
  label: string
  variant?: "dark" | "outline"
}

export const GoogleButton = ({
  onPress,
  label,
  variant = "dark"
}: GoogleButtonProps) => {
  const isDark = variant === "dark"

  return (
    <MotiView
      from={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 15 }}
      className="w-full"
    >
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <MotiView
            animate={{
              scale: pressed ? 0.94 : [1, 1.1, 1],
              borderColor: isDark
                ? pressed
                  ? "#6366f1"
                  : "#1e293b"
                : pressed
                  ? "#6366f1"
                  : "#f1f5f9"
            }}
            transition={{
              scale: pressed
                ? { type: "timing", duration: 100 }
                : { loop: true, duration: 1000, type: "timing" }
            }}
            className={`w-full h-20 flex-row items-center justify-center rounded-[40px] border-[3px] ${
              isDark
                ? "bg-slate-900 shadow-2xl shadow-indigo-500/20"
                : "bg-white shadow-xl shadow-slate-200"
            }`}
          >
            <View className="absolute left-8 flex-row items-center">
              <MotiView
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ loop: true, duration: 1000 }}
                className={`w-4 h-4 rounded-full absolute -left-1 ${isDark ? "bg-indigo-500" : "bg-blue-500"}`}
                style={{
                  shadowColor: isDark ? "#6366f1" : "#3b82f6",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 1,
                  shadowRadius: 12,
                  elevation: 5
                }}
              />
              <AntDesign
                name="google"
                size={24}
                color={isDark ? "white" : "#0f172a"}
              />
            </View>
            <MotiText
              className={`text-xl font-black tracking-tighter uppercase ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {label}
            </MotiText>
            <View className="absolute right-8 flex-row gap-x-2">
              {[1, 2, 3].map((i) => (
                <MotiView
                  key={i}
                  animate={{
                    translateY: [0, -12, 0],
                    scale: [1, 0.5, 1],
                    opacity: [0.2, 0.9, 0.2]
                  }}
                  transition={{
                    loop: true,
                    duration: 1000,
                    delay: i * 150
                  }}
                  className={`w-2 h-2 rounded-full ${
                    i === 2 && isDark
                      ? "bg-indigo-400"
                      : i === 2
                        ? "bg-blue-400"
                        : isDark
                          ? "bg-slate-700"
                          : "bg-slate-200"
                  }`}
                />
              ))}
            </View>
          </MotiView>
        )}
      </Pressable>
    </MotiView>
  )
}
