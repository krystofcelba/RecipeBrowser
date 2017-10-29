import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../redux/reducers/recipes';
import { Recipe } from '../services/api';
import { navigatorStyle, navigatorConfig, StylesConstants } from '../assets/constants';
import RecipeCard from '../components/recipes-list/RecipeCard';
import { getFilteredRecipes } from '../redux/selectors';

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
    console.log('on press recipe: ', recipe.id);
    this.props.navigator.push({
      ...navigatorConfig,
      screen: 'recipeBrowser.RecipeDetail',
      title: recipe.name,
      passProps: { recipeId: recipe.id },
    });
  };

  render() {
    const { recipes } = this.props;
    console.log(this.props.recipes);
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={60}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <FlatList
          data={recipes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <RecipeCard recipe={item as Recipe} onPress={this.onPressRecipe} />}
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
