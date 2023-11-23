import { View, Text } from 'react-native'
import React from 'react'
import Collections from './Collections'
import FooterScreen from '../Footer/FooterScreen'
import HeaderScreen from './HeaderScreen'
import SearchScreen from './SearchScreen'


const HomeLayout = () => {
    
  return (
    <>
    
    <SearchScreen/>
     <Collections/>
      </>
  )
}

export default HomeLayout