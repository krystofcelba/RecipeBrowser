import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { Recipe } from 'src/services/api';
import { StylesConstants } from 'src/assets/constants';

interface Props {
  testID: string;
  recipe: Recipe;
  onPress: (recipe: Recipe) => void;
}

class RecipeCard extends React.PureComponent<Props> {
  onPress = () => {
    const { recipe, onPress } = this.props;
    onPress(recipe);
  };

  render() {
    const { testID, recipe } = this.props;
    return (
      <TouchableOpacity testID={testID} onPress={this.onPress}>
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
    fontFamily: StylesConstants.fontFamily,
  },
});

export default RecipeCard;
