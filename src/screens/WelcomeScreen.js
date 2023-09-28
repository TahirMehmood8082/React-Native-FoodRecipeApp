import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import fRStyle from '../foodRecipeStyle/foodRecipeStyle'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={fRStyle.welcomeMainView}>
      <Image
				source={require("../../assets/images/welcome1.png")}
				style={{ marginTop: 30 }}
			/>
      <Text style={fRStyle.welcomePremium}>40K+ Premium Recipes</Text>
      <Text style={fRStyle.welcomeSlogan}>Cook Like A Chef</Text>
      <TouchableOpacity 
        style={fRStyle.letsGoBtn}
        onPress={()=>navigation.navigate('RecipeList')}
      >
        <Text style={fRStyle.letsGoBtnTxt}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen