"use client"

import { useState, useEffect } from "react"
import { View, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from "react-native"
import { Button, Input, Text } from "@rneui/themed"
import { supabase } from "../lib/supabase"
import * as ImagePicker from "expo-image-picker"

export default function ProfileScreen() {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [website, setWebsite] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
    try {
      setLoading(true)
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) throw new Error("No user found")

      const { data, error } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single()

      if (error) throw error

      if (data) {
        setUsername(data.username || "")
        setWebsite(data.website || "")
        setAvatarUrl(data.avatar_url || "")
      }
    } catch (error) {
      Alert.alert("Error", "Failed to fetch profile")
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile() {
    try {
      setLoading(true)
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) throw new Error("No user found")

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url: avatarUrl,
        updated_at: new Date(),
      }

      const { error } = await supabase.from("profiles").upsert(updates)

      if (error) throw error
      Alert.alert("Success", "Profile updated!")
    } catch (error) {
      Alert.alert("Error", "Failed to update profile")
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  }

  async function pickImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      })

      if (!result.canceled) {
        // Here you would upload the image to Supabase Storage
        // and then update the avatar_url in the profile
        setAvatarUrl(result.assets[0].uri)
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick image")
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) Alert.alert("Error", error.message)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={pickImage}>
          {avatarUrl ? (
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarPlaceholderText}>Upload Photo</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text h4 style={styles.emailText}>
          {supabase.auth.getUser().then(({ data: { user } }) => user?.email)}
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Input label="Username" value={username} onChangeText={setUsername} placeholder="Username" />

        <Input
          label="Website"
          value={website}
          onChangeText={setWebsite}
          placeholder="website.com"
          autoCapitalize="none"
        />

        <Button title="Update Profile" onPress={updateProfile} loading={loading} buttonStyle={styles.updateButton} />

        <Button title="Sign Out" onPress={signOut} buttonStyle={styles.signOutButton} type="outline" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#e1e1e1",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholderText: {
    color: "#666",
    fontSize: 14,
  },
  emailText: {
    marginTop: 10,
  },
  formContainer: {
    padding: 20,
  },
  updateButton: {
    backgroundColor: "#0066cc",
    marginBottom: 15,
  },
  signOutButton: {
    borderColor: "#ff3b30",
    borderWidth: 1,
  },
})

