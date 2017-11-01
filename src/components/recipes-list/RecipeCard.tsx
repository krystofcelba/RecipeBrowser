import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { Recipe } from 'src/services/api';
import { SubTitleText } from 'src/components/common';

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
          <SubTitleText>{recipe.name}</SubTitleText>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default RecipeCard;
