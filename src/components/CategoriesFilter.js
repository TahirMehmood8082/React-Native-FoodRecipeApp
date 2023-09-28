import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { categories, colors } from '../Constant'
import fRStyle from '../foodRecipeStyle/foodRecipeStyle'

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) =>{
          return(
            <View 
              style={[fRStyle.categoriesFilterList,
                {backgroundColor:
                  index === 0? colors.COLOR_PRIMARY:colors.COLOR_LIGHT}
              ]}
            >
              <Text
                style={{
                  color: index === 0 && colors.COLOR_LIGHT,
                  fontSize: 18,
                }}
              >
                {category.category}
              </Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default CategoriesFilter