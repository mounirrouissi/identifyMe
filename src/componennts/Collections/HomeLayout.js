import { View, Text } from 'react-native'
import React from 'react'
import Collections from './Collections'
import FooterScreen from '../Footer/FooterScreen'


const HomeLayout = () => {
  return (
    <View>
      <Collections/>
      <FooterScreen />
    </View>
  )
}

export default HomeLayout