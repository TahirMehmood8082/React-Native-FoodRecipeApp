import { FlatList, View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { colors, recipeList } from '../Constant'
import fRStyle from '../foodRecipeStyle/foodRecipeStyle'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const RecipeCard = () => {
  const navigation = useNavigation()
  return (
    <View>
      <FlatList 
        data={recipeList}
        renderItem={({ item })=>(
          <Pressable 
            onPress={()=> {navigation.navigate('RecipeDetail', { item: item})}}
            style={fRStyle.RecipeCardItem}>
            <Image 
              source={item.image}
              style={fRStyle.RecipeCardImg}
            />
            <Text>{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 4}}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent:"space-between"}}
        showsVerticalScrollIndicator= {false}
      />
    </View>
  )
}

export default RecipeCard