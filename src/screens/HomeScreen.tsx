import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMain from '../components/home/HeaderMain'

const HomeScreen = () => {
  return (
    <ScrollView className='h-full bg-getirBg'>
      <HeaderMain/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})