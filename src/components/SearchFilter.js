import { View, Text, TextInput } from 'react-native'
import React from 'react'
import fRStyle from '../foodRecipeStyle/foodRecipeStyle'
import { FontAwesome } from '@expo/vector-icons'

const SearchFilter = ({icon, placeholder}) => {
  return (
    <View style={fRStyle.SearchFilterMainView}>

      <FontAwesome 
        name={icon}
        size={20}
        color={'#f96163'}
      />
      <TextInput 
        placeholder={placeholder} 
        style = {fRStyle.SearchFilterTxtInput}
      />
    </View>

  )
}

export default SearchFilter