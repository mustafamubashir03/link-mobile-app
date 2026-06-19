import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
    const insets = useSafeAreaInsets();
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.primaryLight,
            tabBarInactiveTintColor: Colors.textMuted,
            tabBarStyle: {
                backgroundColor: Colors.background,
                borderTopColor: Colors.border,
                borderTopWidth: 0.5,
                height: 56 + (Platform.OS === "android" ? Math.max(insets.bottom, 0) : insets.bottom),
                paddingBottom: Platform.OS === "android" ? Math.max(insets.bottom, 4) : insets.bottom,
                paddingTop: 8,
            },
            headerStyle: {
                backgroundColor: Colors.background,
            },
            headerTintColor: Colors.textPrimary,
            headerShadowVisible: false,
            headerTitleStyle: {
                fontWeight: 600,
                fontSize: 20
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Chats",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="chatbubbles-outline" size={size} color={color} />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="discover"
                options={{
                    title: "Discover",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="search-outline" size={size} color={color} />
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="person-outline" size={size} color={color} />
                        )
                    }
                }}
            />
        </Tabs>
    )
}