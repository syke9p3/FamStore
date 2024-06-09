import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl font-bold">Profile</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{ color: 'blue' }}>Go to profile</Link>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})