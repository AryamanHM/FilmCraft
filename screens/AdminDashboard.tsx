"use client"

import { useState } from "react"
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const userData = [
  { id: "1", name: "Barry Gordon", role: "Archivist", status: "Active", email: "barry@example.com" },
  { id: "2", name: "University of Buffalo", role: "Institution", status: "Active", email: "contact@buffalo.edu" },
  { id: "3", name: "Sarah Johnson", role: "Donor", status: "Pending", email: "sarah@example.com" },
  { id: "4", name: "Michael Smith", role: "Archivist", status: "Inactive", email: "michael@example.com" },
  { id: "5", name: "Film Foundation", role: "Institution", status: "Active", email: "info@filmfoundation.org" },
]

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState("Users")

  const filteredData = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <View style={styles.userRole}>
        <Text style={styles.roleText}>{item.role}</Text>
      </View>
      <View style={styles.userStatus}>
        <Text
          style={[
            styles.statusText,
            item.status === "Active"
              ? styles.statusActive
              : item.status === "Pending"
                ? styles.statusPending
                : styles.statusInactive,
          ]}
        >
          {item.status}
        </Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>EDIT</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Users" && styles.activeTab]}
          onPress={() => setSelectedTab("Users")}
        >
          <Text style={[styles.tabText, selectedTab === "Users" && styles.activeTabText]}>USERS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Archives" && styles.activeTab]}
          onPress={() => setSelectedTab("Archives")}
        >
          <Text style={[styles.tabText, selectedTab === "Archives" && styles.activeTabText]}>ARCHIVES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Reports" && styles.activeTab]}
          onPress={() => setSelectedTab("Reports")}
        >
          <Text style={[styles.tabText, selectedTab === "Reports" && styles.activeTabText]}>REPORTS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {selectedTab === "Users" && (
          <>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerCell, { flex: 2 }]}>USER</Text>
              <Text style={[styles.headerCell, { flex: 1 }]}>ROLE</Text>
              <Text style={[styles.headerCell, { flex: 1 }]}>STATUS</Text>
              <Text style={[styles.headerCell, { flex: 1 }]}>ACTION</Text>
            </View>

            <FlatList
              data={filteredData}
              renderItem={renderUserItem}
              keyExtractor={(item) => item.id}
              style={styles.list}
            />

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+ ADD NEW USER</Text>
            </TouchableOpacity>
          </>
        )}

        {selectedTab === "Archives" && (
          <View style={styles.placeholderContent}>
            <Text style={styles.placeholderText}>Archives Management</Text>
            <Text>This section would display archive management tools.</Text>
          </View>
        )}

        {selectedTab === "Reports" && (
          <View style={styles.placeholderContent}>
            <Text style={styles.placeholderText}>Reports & Analytics</Text>
            <Text>This section would display reports and analytics.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  searchBar: {
    padding: 15,
    backgroundColor: "white",
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#143b55",
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
  },
  activeTabText: {
    color: "white",
  },
  content: {
    flex: 1,
    padding: 15,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerCell: {
    fontWeight: "bold",
    color: "#143b55",
  },
  list: {
    backgroundColor: "white",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  userItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    alignItems: "center",
  },
  userInfo: {
    flex: 2,
  },
  userName: {
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    color: "#666",
    fontSize: 12,
  },
  userRole: {
    flex: 1,
  },
  roleText: {
    color: "#143b55",
  },
  userStatus: {
    flex: 1,
  },
  statusText: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  statusActive: {
    backgroundColor: "#D4EDDA",
    color: "#155724",
  },
  statusPending: {
    backgroundColor: "#FFF3CD",
    color: "#856404",
  },
  statusInactive: {
    backgroundColor: "#F8D7DA",
    color: "#721C24",
  },
  editButton: {
    flex: 1,
    backgroundColor: "#143b55",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    alignItems: "center",
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  addButton: {
    backgroundColor: "#dc2103",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  placeholderContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#143b55",
    marginBottom: 10,
  },
})

