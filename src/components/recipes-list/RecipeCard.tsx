import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { Recipe } from 'src/services/api';

interface Props {
  recipe: Recipe;
  onPress: (recipe: Recipe) => void;
}

class RecipeCard extends React.PureComponent<Props> {
  onPress = () => {
    const { recipe, onPress } = this.props;
    onPress(recipe);
  };

  render() {
    const { recipe } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Card image={{ uri: recipe.image }}>
          <Text style={styles.title}>{recipe.name.toUpperCase()}</Text>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RecipeCard;
