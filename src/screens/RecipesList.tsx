import React, { Component } from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';

import { actionCreators } from '../redux/reducers/recipes';
import { Recipe } from '../services/api';
import AppTheme, { navigatorStyle, navigatorConfig } from '../assets/appTheme';
import RecipeCard from '../components/recipes-list/RecipeCard';
import { getFilteredRecipes } from '../redux/selectors';
import i18n from '../assets/i18n';
import { KeyboardAvoidingView } from 'src/components/common';

interface Props {
  navigator: any;
  fetchRecipes: typeof actionCreators.fetchRecipes;
  recipes: [Recipe];
}

class RecipesList extends Component<Props, any> {
  componentDidMount() {
    this.props.navigator.setStyle({
      ...navigatorStyle,
      navBarCustomView: 'recipeBrowser.RecipesListTopBar',
      navBarComponentAlignment: 'center',
      navBarCustomViewInitialProps: {},
    });
    this.props.fetchRecipes();
  }

  onPressRecipe = (recipe: Recipe) => {
    this.props.navigator.push({
      ...navigatorConfig,
      screen: 'recipeBrowser.RecipeDetail',
      title: recipe.name,
      passProps: { recipeId: recipe.id },
    });
  };

  onPressAddButton = () => {
    this.props.navigator.showModal({
      navigatorStyle,
      screen: 'recipeBrowser.AddRecipeForm',
      title: i18n.t('addRecipe'),
    });
  };

  recipeKeyExtractor = item => item.id;

  renderRecipeFlatListItem = ({ item }) => (
    <RecipeCard recipe={item} onPress={this.onPressRecipe} testID={`recipeCard_${item.id}`} />
  );

  render() {
    const { recipes } = this.props;
    return (
      <KeyboardAvoidingView testID="recipesListScreen" style={styles.container}>
        <FlatList
          data={recipes}
          keyExtractor={this.recipeKeyExtractor}
          renderItem={this.renderRecipeFlatListItem}
          contentContainerStyle={{ paddingBottom: AppTheme.defaultPadding }}
        />
        <ActionButton
          testID="addButton"
          buttonColor={AppTheme.secondaryColor}
          onPress={this.onPressAddButton}
          hideShadow
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({ recipes: getFilteredRecipes(state) });

const mapDispatchToProps = {
  fetchRecipes: actionCreators.fetchRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
