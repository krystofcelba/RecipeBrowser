import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';

import { actionCreators } from '../redux/reducers/recipes';
import { Recipe } from '../services/api';
import { navigatorStyle, navigatorConfig, StylesConstants, Colors } from '../assets/constants';
import RecipeCard from '../components/recipes-list/RecipeCard';
import { getFilteredRecipes } from '../redux/selectors';
import i18n from '../assets/i18n';

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
      ...navigatorConfig,
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
      <KeyboardAvoidingView
        testID="recipesListScreen"
        keyboardVerticalOffset={60}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <FlatList data={recipes} keyExtractor={this.recipeKeyExtractor} renderItem={this.renderRecipeFlatListItem} />
        <ActionButton
          testID="addButton"
          buttonColor={Colors.secondaryColor}
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
    marginBottom: StylesConstants.defaultMargin * 1.5,
  },
});

const mapStateToProps = state => ({ recipes: getFilteredRecipes(state) });

const mapDispatchToProps = {
  fetchRecipes: actionCreators.fetchRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
