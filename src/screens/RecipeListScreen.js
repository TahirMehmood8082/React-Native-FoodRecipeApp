import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import fRStyle from '../foodRecipeStyle/foodRecipeStyle'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={fRStyle.recipeListScreenMainView}>
      <Header
        headerTxt={"Hi Tahir"}
        headerIcon={"bell-o"}
      />
      <SearchFilter 
        icon={"search"}
        placeholder={"Enter your fav recipe"}
      />
      <View style={{marginTop: 22}}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Categories</Text>
        <CategoriesFilter />
      </View>

      <View style={{marginTop: 22, flex: 1}}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Recipes</Text>
        <RecipeCard />
      </View>

      
    </SafeAreaView>
  )
}

export default RecipeListScreen