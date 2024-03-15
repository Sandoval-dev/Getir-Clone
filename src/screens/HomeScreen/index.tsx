import React from 'react'
import { View, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import HeaderMain from '../../components/HeaderMain/index'
import BannerCarousel from '../../components/BannerCarousel/index'
import MainCategories from '../../components/MainCategories/index'

const index = () => {
  return (
   <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:'#F5F5F5'}}>
         <HeaderMain/>
         <BannerCarousel/>
         <MainCategories/>
   </ScrollView>
  )
}

export default index