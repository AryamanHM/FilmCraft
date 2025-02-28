import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ArchivistDashboard from "../components/ArchivistDashboard"

export default function ArchivistScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ArchivistDashboard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
})

