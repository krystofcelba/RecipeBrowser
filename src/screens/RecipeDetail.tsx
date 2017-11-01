import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import glamorous from 'glamorous-native';
const { View } = glamorous;

import { Recipe } from 'src/services/api';
import { getRecipe } from 'src/redux/selectors';
import IngredientsList from 'src/components/recipe-detail/IngredientsList';
import StepsList from 'src/components/recipe-detail/StepsList';
import AppTheme from 'src/assets/appTheme';
import { PaddedView, Text, TitleText, namedGlamorous } from 'src/components/common';

const DescriptionContainer = namedGlamorous(PaddedView, 'DescriptionContainer')({
  paddingBottom: 0,
});
const IngredientsContainer = namedGlamorous(PaddedView, 'IngredientsContainer')({
  paddingVertical: AppTheme.defaultPadding / 2,
  marginVertical: AppTheme.defaultPadding / 2,
  paddingRight: AppTheme.defaultPadding * 2.5,
  backgroundColor: AppTheme.lightSecondaryColor,
});
const StepsContainer = namedGlamorous(PaddedView, 'StepsContainer')({
  paddingTop: 0,
  paddingRight: AppTheme.defaultPadding * 2.5,
});

interface Props {
  navigator: any;
  recipeId: number;
  recipe: Recipe;
}

class RecipeDetail extends Component<Props> {
  render() {
    const { recipe: { image, name, description, ingredients, seasonings, steps } } = this.props;
    const imageUri = typeof image === 'string' ? image : image.uri;
    return (
      <View flex={1} testID="recipeDetailScreen">
        <ScrollView>
          <Image style={styles.recipeImage} source={{ uri: imageUri }} resizeMode="cover" />
          <DescriptionContainer>
            <TitleText>{name}</TitleText>
            <Text>{description}</Text>
          </DescriptionContainer>
          <IngredientsContainer>
            <IngredientsList ingredients={ingredients} seasonings={seasonings} />
          </IngredientsContainer>
          <StepsContainer>
            <StepsList steps={steps} />
          </StepsContainer>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recipeImage: {
    width: '100%',
    height: 220,
  },
});

const mapStateToProps = (state, { recipeId }) => ({ recipe: getRecipe(state, recipeId) });

export default connect(mapStateToProps)(RecipeDetail);
