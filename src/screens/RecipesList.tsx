import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from '../redux/reducers/recipes';

interface Props {
  fetchRecipes: typeof actionCreators.fetchRecipes;
}

class RecipesList extends Component<Props, any> {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapDispatchToProps = {
  fetchRecipes: actionCreators.fetchRecipes,
};

export default connect(undefined, mapDispatchToProps)(RecipesList);
