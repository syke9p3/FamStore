import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl font-bold">Home</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})