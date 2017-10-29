import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../redux/reducers/recipes';
import { Recipe } from '../services/api';
import { Colors } from '../assets/constants';
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
      navBarBackgroundColor: Colors.primaryColor,
      navBarCustomView: 'recipeBrowser.RecipesListTopBar',
      navBarComponentAlignment: 'center',
      navBarCustomViewInitialProps: {},
    });
    this.props.fetchRecipes();
  }

  onPressRecipe = (recipeId: number) => {
    console.log('on press recipe: ', recipeId);
  };

  render() {
    const { recipes } = this.props;
    console.log(this.props.recipes);
    return (
      <View style={styles.container}>
        <FlatList
          data={recipes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <RecipeCard recipe={item as Recipe} onPress={this.onPressRecipe} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
});

const mapStateToProps = state => ({ recipes: getFilteredRecipes(state) });

const mapDispatchToProps = {
  fetchRecipes: actionCreators.fetchRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
