import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

import { Recipe, Ingredient } from '../services/api';
import { Colors, StylesConstants } from '../assets/constants';
import i18n from '../assets/i18n';
import FormInputCell from '../components/new-recipe-form/FormInputCell';
import FormButtonCell from '../components/new-recipe-form/FormButtonCell';
import { actionCreators } from '../redux/reducers/ui';

interface Props {
  navigator: any;
  recipe: Recipe;
  canBeSubmitted: boolean;
  addIngredient: (ingredient: Ingredient) => void;
}

class NewRecipeForm extends Component<Props> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: i18n.t('add'), // for a textual button, provide the button title (label)
        id: 'add',
        disabled: true,
      },
    ],
    leftButtons: [
      {
        title: i18n.t('cancel'), // for a textual button, provide the button title (label)
        id: 'cancel',
      },
    ],
  };
  onAddIngredientCellPress = () => {
    this.props.addIngredient({ name: 'test', amount: 1, unit: 'kg' });
  };

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      const { navigator } = this.props;
      switch (event.id) {
        case 'cancel':
          navigator.dismissModal();
          break;

        default:
          break;
      }
    }
  };

  render() {
    const { recipe: { ingredients } } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <TableView>
            <Section>
              <FormInputCell placeholder={i18n.t('name')} />
              <FormInputCell placeholder={i18n.t('description')} numberOfLines={4} />
            </Section>
            <Section header={i18n.t('ingredients')}>
              {ingredients.map((ingredient, i) => <Cell key={i} title={ingredient.name} />)}
              <FormButtonCell title={`+ ${i18n.t('add')}`} onPress={this.onAddIngredientCellPress} />
            </Section>
          </TableView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
    flex: 1,
  },
});

const mapStateToProps = ({ ui: { addRecipeForm: { recipe, canBeSubmitted } } }) => ({ recipe, canBeSubmitted });

const mapDispatchToProps = {
  addIngredient: actionCreators.addRecipeFormAddIngredient,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipeForm);
