import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#143b55",
        },
        tabBarActiveTintColor: "#dc2103",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.7)",
        headerStyle: {
          backgroundColor: "#143b55",
        },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarLabel: "Explore",
        }}
      />
    </Tabs>
  )
}

