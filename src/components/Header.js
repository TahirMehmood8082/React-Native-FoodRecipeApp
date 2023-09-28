import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import fRStyle from '../foodRecipeStyle/foodRecipeStyle'


const Header = ({headerTxt, headerIcon}) => {
  return (
    <View style={fRStyle.headerMainView}>
      <Text style={fRStyle.headerTxtStyle}>{headerTxt}</Text>
      <FontAwesome 
        name = {headerIcon}
        size={24}
        color={'#f96163'}
      />
    </View>
  )
}

export default Header