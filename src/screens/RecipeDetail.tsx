import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';

import { Recipe } from '../services/api';
import { getRecipe } from '../redux/selectors';
import { Colors, Dimensions } from '../assets/constants';

interface Props {
  navigator: any;
  recipeId: number;
  recipe: Recipe;
}

class RecipeDetail extends Component<Props> {
  render() {
    const { recipe } = this.props;
    console.log(recipe);
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image style={styles.recipeImage} source={{ uri: recipe.image }} resizeMode="cover" />
          <Text style={styles.title} h3>
            {recipe.name}
          </Text>
          <Text style={styles.description}>{recipe.description}</Text>
        </ScrollView>
      </View>
    );
  }
}

const componentsMargin = {
  marginLeft: Dimensions.defaultMargin,
  marginRight: Dimensions.defaultMargin,
  marginBottom: Dimensions.defaultMargin,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
  recipeImage: {
    width: '100%',
    height: 220,
    marginBottom: Dimensions.defaultMargin,
  },
  title: {
    ...componentsMargin,
    color: Colors.primaryTextColor,
  },
  description: {
    ...componentsMargin,
  },
});

const mapStateToProps = (state, { recipeId }) => ({ recipe: getRecipe(state, recipeId) });

export default connect(mapStateToProps)(RecipeDetail);
