import { StyleSheet } from 'react-native';
import { colors, recipeList } from '../Constant'

const styles = StyleSheet.create({
  welcomeMainView: {
    flex: 1,
    alignItems: 'center',
  },
  welcomePremium: {
    color: "#f96163",
    fontSize: 22,
    fontWeight: 'bold',
  },
  welcomeSlogan: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#3c444c',
    marginTop: 44,
    marginBottom: 40,
  },
  letsGoBtn: {
    backgroundColor: '#f96163',
    borderRadius: 18,
    paddingVertical: 18,
    width: '80%',
    alignItems: 'center',
  },
  letsGoBtnTxt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  recipeListScreenMainView:{
    flex: 1, 
    marginHorizontal: 16,
  },
  headerMainView: {
    flexDirection: 'row',
  },
  headerTxtStyle:  {
    flex: 1, 
    fontSize: 22, 
    fontWeight: '700',
  },
  SearchFilterMainView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  SearchFilterTxtInput: {
    paddingLeft: 8,
    fontSize: 16,
    color: '#808080'
  },
  categoriesFilterList:{
    marginRight: 36,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height:4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 16,
  },
  RecipeCardItem:{
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 26,
  },
  RecipeCardImg:{
    width: 150,
    height: 150,
    resizeMode: 'center',
  },
  RecipeDetailsScreenMainView: {
    backgroundColor: '#6f4e37',
    flex: 1,
  },
  RecipeDetailsScreenSubView:{
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  RecipeDetailsScreenRecipeImgView: {
   height: 300,
   width: 300,
   position: 'absolute',
   top: -150, 
  },
  RecipeDetailsScreenRecipeImg:{
    width:'100%',
    height: '100%',
    resizeMode: 'contain',
  },
  RecipeDetailsScreenRecipeName: {
    marginTop: 150,
    fontSize: 28,
    fontWeight: 'bold',
  },
  RecipeDetailsScreenRecipeDescription: {
    fontSize: 20,
    marginVertical: 16,
  },
  RecipeExtraDetailCardMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RecipeExtraDetailCardSubView: {
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
  },
  RecipeExtraDetailCardImg: {
    fontSize: 40
  },
  RecipeExtraDetailCardTime: {
    fontSize: 20,
    fontWeight: 400,
  },
  RecipeDetailsScreenIngredientsMainView: {
    alignSelf: 'flex-start',
    marginVertical: 22,
  },
  RecipeDetailsScreenIngredientsTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 6,
  },
  RecipeDetailsScreenIngredientsListMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  RecipeDetailsScreenIngredientsListSubView: {
    backgroundColor: 'red',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  RecipeDetailsScreenIngredientsListValue: {
    fontSize: 18,
    marginLeft: 6,
  },
});

export default styles;