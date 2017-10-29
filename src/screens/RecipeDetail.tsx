import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';

import { Recipe } from '../services/api';
import { getRecipe } from '../redux/selectors';
import { Colors, StylesConstants } from '../assets/constants';
import IngredientsBox from '../components/recipe-detail/IngredientsBox';
import StepsBox from '../components/recipe-detail/StepsBox';

interface Props {
  navigator: any;
  recipeId: number;
  recipe: Recipe;
}

class RecipeDetail extends Component<Props> {
  render() {
    const { recipe: { image, name, description, ingredients, seasonings, steps } } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image style={styles.recipeImage} source={{ uri: image }} resizeMode="cover" />
          <View style={styles.recipesInfoContainer}>
            <Text style={styles.title} h3>
              {name}
            </Text>
            <Text style={styles.description}>{description}</Text>
            <IngredientsBox style={styles.ingredientsBox} ingredients={ingredients} seasonings={seasonings} />
            <StepsBox style={styles.stepsBox} steps={steps} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const componentsMargin = {
  paddingLeft: StylesConstants.defaultMargin,
  paddingRight: StylesConstants.defaultMargin * 2,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipeImage: {
    width: '100%',
    height: 220,
    marginBottom: StylesConstants.defaultMargin,
  },
  title: {
    ...componentsMargin,
    color: Colors.primaryTextColor,
    fontFamily: StylesConstants.fontFamily,
  },
  description: {
    ...componentsMargin,
    marginBottom: StylesConstants.defaultMargin / 2,
    fontFamily: StylesConstants.fontFamily,
  },
  ingredientsBox: {
    paddingTop: StylesConstants.defaultMargin / 2,
    paddingBottom: StylesConstants.defaultMargin / 2,
    backgroundColor: Colors.lightSecondaryColor,
    ...componentsMargin,
  },
  stepsBox: {
    paddingTop: StylesConstants.defaultMargin / 2,
    paddingBottom: StylesConstants.defaultMargin / 2,
    ...componentsMargin,
  },
  recipesInfoContainer: { paddingBottom: StylesConstants.defaultMargin * 1.5 },
});

const mapStateToProps = (state, { recipeId }) => ({ recipe: getRecipe(state, recipeId) });

export default connect(mapStateToProps)(RecipeDetail);
