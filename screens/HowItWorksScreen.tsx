import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const { width } = Dimensions.get("window")

export default function HowItWorksScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Help a film archive in need!</Text>
          <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("DonorScreen")}>
            <Text style={styles.getStartedButtonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works:</Text>
          <Text style={styles.sectionSubtitle}>From unknown to known</Text>

          <View style={styles.step}>
            <View style={styles.stepContent}>
              <Text style={styles.stepText}>Find an endangered archive of materials, photos, and films.</Text>
              <Image source={require("../assets/step1.png")} style={styles.stepImage} resizeMode="contain" />
            </View>
            <View style={styles.lifebuoy}>
              <Image source={require("../assets/lifebuoy.png")} style={styles.lifebuoyImage} resizeMode="contain" />
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepContent}>
              <Text style={styles.stepText}>
                A film archivist will connect you to the actively conserving film archive in need.
              </Text>
              <Image source={require("../assets/step2.png")} style={styles.stepImage} resizeMode="contain" />
            </View>
            <View style={styles.lifebuoy}>
              <Image source={require("../assets/lifebuoy.png")} style={styles.lifebuoyImage} resizeMode="contain" />
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepContent}>
              <Text style={styles.stepText}>Help will fund the archive for your chosen project.</Text>
              <Image source={require("../assets/step3.png")} style={styles.stepImage} resizeMode="contain" />
            </View>
            <View style={styles.lifebuoy}>
              <Image source={require("../assets/lifebuoy.png")} style={styles.lifebuoyImage} resizeMode="contain" />
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepContent}>
              <Text style={styles.stepText}>You'll be the first person and the archive will thank you.</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>ABOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>CONTACT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>LOG IN / REGISTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#dc2103",
    padding: 20,
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  getStartedButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  getStartedButtonText: {
    color: "#dc2103",
    fontWeight: "bold",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#143b55",
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  step: {
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "center",
  },
  stepContent: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  stepText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  stepImage: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  lifebuoy: {
    width: 50,
    alignItems: "center",
  },
  lifebuoyImage: {
    width: 40,
    height: 40,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#143b55",
    padding: 15,
  },
  footerButton: {
    padding: 5,
  },
  footerButtonText: {
    color: "white",
    fontSize: 12,
  },
})

