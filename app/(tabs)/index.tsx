import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"
import HowItWorks from "../../components/HowItWorks"
import DonorView from "../../components/DonorView"

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HowItWorks />
        <DonorView />
        <View style={styles.buttonContainer}>
          <Link href="/archivist" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Archivist Dashboard</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/admin" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Admin Dashboard</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    padding: 20,
    gap: 10,
  },
  button: {
    backgroundColor: "#143b55",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
})

