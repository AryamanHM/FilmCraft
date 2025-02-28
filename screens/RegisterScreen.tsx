"use client"

import { useState } from "react"
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native"
import { Button, Input, Text } from "@rneui/themed"
import { supabase } from "../lib/supabase"
import { useNavigation } from "@react-navigation/native"

export default function RegisterScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) Alert.alert("Error", error.message)
    else Alert.alert("Success", "Check your email for the confirmation link!")
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.headerContainer}>
        <Text h3 style={styles.title}>
          Create Account
        </Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
      </View>

      <View style={styles.formContainer}>
        <Input
          label="Email"
          leftIcon={{ type: "material", name: "email" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
        />

        <Input
          label="Password"
          leftIcon={{ type: "material", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
        />

        <Button title="Sign Up" loading={loading} onPress={() => signUpWithEmail()} buttonStyle={styles.button} />

        <View style={styles.footer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    color: "#666",
  },
  formContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: "#0066cc",
    borderRadius: 5,
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  link: {
    color: "#0066cc",
    fontWeight: "bold",
  },
})

