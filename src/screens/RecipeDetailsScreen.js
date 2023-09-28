import { View, Text, Image, SafeAreaView, Pressable, ViewBase } from 'react-native';
import React from 'react';
import fRStyle from '../foodRecipeStyle/foodRecipeStyle';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={[fRStyle.RecipeDetailsScreenMainView, { backgroundColor: item.color }]}>
      <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: 16 }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome
            name={"arrow-circle-left"}
            size={28}
            color={"white"} />
        </Pressable>
        <FontAwesome
          name={"heart-o"}
          size={28}
          color={"white"} />
      </SafeAreaView>
      <View style={fRStyle.RecipeDetailsScreenSubView}>
        <View style={fRStyle.RecipeDetailsScreenRecipeImgView}>
          <Image
            source={item.image}
            style={fRStyle.RecipeDetailsScreenRecipeImg} />
        </View>
        <Text style={fRStyle.RecipeDetailsScreenRecipeName}>
          {item.name}
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <Text style={fRStyle.RecipeDetailsScreenRecipeDescription}>
              {item.description}
            </Text>
            <View style={fRStyle.RecipeExtraDetailCardMainView}>
              <View style={[fRStyle.RecipeExtraDetailCardSubView,{backgroundColor: "rgba(255, 0, 0, 0.38)" }]}>
                <Text style={fRStyle.RecipeExtraDetailCardImg}>⏰</Text>
                <Text style={fRStyle.RecipeExtraDetailCardTime}>{item.time}</Text>
              </View>
              <View style={[fRStyle.RecipeExtraDetailCardSubView,{backgroundColor: "rgba(135, 206, 235, 0.8)" }]}>
                <Text style={fRStyle.RecipeExtraDetailCardImg}>🥣</Text>
                <Text style={fRStyle.RecipeExtraDetailCardTime}>{item.difficulty}</Text>
              </View>
              <View style={[fRStyle.RecipeExtraDetailCardSubView,{backgroundColor: "rgba(255, 165, 0, 0.48)" }]}>
                <Text style={fRStyle.RecipeExtraDetailCardImg}>🔥</Text>
                <Text style={fRStyle.RecipeExtraDetailCardTime}>{item.calories}</Text>
              </View>
            </View>
            <View style={fRStyle.RecipeDetailsScreenIngredientsMainView}>
              <Text style={fRStyle.RecipeDetailsScreenIngredientsTitle}>
                Ingredients:
              </Text>
              {item.ingredients.map((ingredient, index)=>{
                return (
                  <View style={fRStyle.RecipeDetailsScreenIngredientsListMainView} key={index}>
                    <View style={fRStyle.RecipeDetailsScreenIngredientsListSubView}>
                    </View >
                    <Text style={fRStyle.RecipeDetailsScreenIngredientsListValue}>
                      {ingredient}
                    </Text>
                  </View>
                )
              })}
            </View>

            <View style={fRStyle.RecipeDetailsScreenIngredientsMainView}>
              <Text style={fRStyle.RecipeDetailsScreenIngredientsTitle}>
                Steps:
              </Text>
              {item.steps.map((step, index)=>{
                return (
                  <Text style={[fRStyle.RecipeDetailsScreenIngredientsListValue, {marginVertical: 6}]} key={index}>
                    {`${index+1}-${step}`}
                  </Text>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen