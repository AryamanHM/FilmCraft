"use client"

import { useState } from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native"

export default function DonorView() {
  const [selectedTab, setSelectedTab] = useState("active")

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "active" && styles.activeTab]}
          onPress={() => setSelectedTab("active")}
        >
          <Text style={[styles.tabText, selectedTab === "active" && styles.activeTabText]}>ACTIVE PROJECTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "completed" && styles.activeTab]}
          onPress={() => setSelectedTab("completed")}
        >
          <Text style={[styles.tabText, selectedTab === "completed" && styles.activeTabText]}>COMPLETED</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.archiveCard}>
          <Image source={require("../assets/images/react-logo.png")} style={styles.archiveImage} resizeMode="cover" />
          <View style={styles.archiveInfo}>
            <Text style={styles.archiveTitle}>Film Archive in Need</Text>
            <Text style={styles.archiveDescription}>
              This archive contains rare footage from the early 20th century that needs preservation.
            </Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "65%" }]} />
              </View>
              <Text style={styles.progressText}>65% funded</Text>
            </View>
            <TouchableOpacity style={styles.donateButton}>
              <Text style={styles.donateButtonText}>DONATE NOW</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.archiveCard}>
          <Image source={require("../assets/images/react-logo.png")} style={styles.archiveImage} resizeMode="cover" />
          <View style={styles.archiveInfo}>
            <Text style={styles.archiveTitle}>Historical Documentary Collection</Text>
            <Text style={styles.archiveDescription}>
              A collection of historical documentaries that require digitization and preservation.
            </Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "30%" }]} />
              </View>
              <Text style={styles.progressText}>30% funded</Text>
            </View>
            <TouchableOpacity style={styles.donateButton}>
              <Text style={styles.donateButtonText}>DONATE NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#0c334b",
  },
  tab: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#dc2103",
  },
  tabText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "bold",
    fontSize: 12,
  },
  activeTabText: {
    color: "white",
  },
  content: {
    padding: 15,
  },
  archiveCard: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  archiveImage: {
    width: "100%",
    height: 200,
  },
  archiveInfo: {
    padding: 15,
  },
  archiveTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#143b55",
    marginBottom: 5,
  },
  archiveDescription: {
    color: "#666",
    marginBottom: 15,
  },
  progressContainer: {
    marginBottom: 15,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 5,
  },
  progress: {
    height: "100%",
    backgroundColor: "#dc2103",
  },
  progressText: {
    color: "#666",
    fontSize: 12,
  },
  donateButton: {
    backgroundColor: "#dc2103",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  donateButtonText: {
    color: "white",
    fontWeight: "bold",
  },
})

