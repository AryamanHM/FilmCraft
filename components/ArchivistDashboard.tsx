import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native"

const archiveData = [
  { id: "1", title: "Film Archive 1", status: "Pending", donor: "John Doe" },
  { id: "2", title: "Film Archive 2", status: "In Progress", donor: "Jane Smith" },
  { id: "3", title: "Film Archive 3", status: "Completed", donor: "Robert Johnson" },
  { id: "4", title: "Film Archive 4", status: "Pending", donor: "Sarah Williams" },
  { id: "5", title: "Film Archive 5", status: "In Progress", donor: "Michael Brown" },
]

export default function ArchivistDashboard() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.archiveItem}>
      <View style={styles.archiveInfo}>
        <Text style={styles.archiveTitle}>{item.title}</Text>
        <Text style={styles.archiveDonor}>Donor: {item.donor}</Text>
      </View>
      <View style={styles.archiveStatus}>
        <Text
          style={[
            styles.statusText,
            item.status === "Pending"
              ? styles.statusPending
              : item.status === "In Progress"
                ? styles.statusInProgress
                : styles.statusCompleted,
          ]}
        >
          {item.status}
        </Text>
      </View>
      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>VIEW</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Active Archives</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>FILTER</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={archiveData} renderItem={renderItem} keyExtractor={(item) => item.id} style={styles.list} />

      <View style={styles.gallerySection}>
        <Text style={styles.galleryTitle}>COLLECTION OF ARCHIVES</Text>
        <View style={styles.gallery}>
          <Image source={require("../assets/images/react-logo.png")} style={styles.thumbnail} />
          <Image source={require("../assets/images/react-logo.png")} style={styles.thumbnail} />
          <Image source={require("../assets/images/react-logo.png")} style={styles.thumbnail} />
          <Image source={require("../assets/images/react-logo.png")} style={styles.thumbnail} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#143b55",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  filterButton: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  filterButtonText: {
    color: "#143b55",
    fontWeight: "bold",
  },
  list: {
    flex: 1,
    padding: 10,
  },
  archiveItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  archiveInfo: {
    flex: 1,
  },
  archiveTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#143b55",
  },
  archiveDonor: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  archiveStatus: {
    marginRight: 10,
  },
  statusText: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  statusPending: {
    backgroundColor: "#FFF3CD",
    color: "#856404",
  },
  statusInProgress: {
    backgroundColor: "#D1ECF1",
    color: "#0C5460",
  },
  statusCompleted: {
    backgroundColor: "#D4EDDA",
    color: "#155724",
  },
  viewButton: {
    backgroundColor: "#143b55",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  viewButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  gallerySection: {
    padding: 15,
    backgroundColor: "white",
  },
  galleryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#143b55",
    marginBottom: 10,
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  thumbnail: {
    width: "48%",
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
})

