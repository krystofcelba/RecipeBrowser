import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

import { Colors, StylesConstants } from '../assets/constants';
import i18n from '../assets/i18n';
import FormInputCell from '../components/new-recipe-form/FormInputCell';
import FormButtonCell from '../components/new-recipe-form/FormButtonCell';
import FormIngredientCell from '../components/new-recipe-form/FormIngredientCell';
import { actionCreators, NewRecipe } from '../redux/reducers/ui';

interface Props {
  navigator: any;
  newRecipe: NewRecipe;
  canBeSubmitted: boolean;
  addIngredient: typeof actionCreators.addRecipeFormAddIngredient;
  updateIngredient: typeof actionCreators.addRecipeFormUpdateIngredient;
  updateName: typeof actionCreators.addRecipeFormUpdateName;
  updateDescription: typeof actionCreators.addRecipeFormUpdateDescription;
}

class AddRecipeForm extends Component<Props> {
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
    const {
      newRecipe: { name, description, ingredients },
      updateName,
      updateDescription,
      addIngredient,
      updateIngredient,
    } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <TableView>
            <Section>
              <FormInputCell placeholder={i18n.t('name')} value={name} onChangeText={updateName} />
              <FormInputCell
                placeholder={i18n.t('description')}
                numberOfLines={4}
                value={description}
                onChangeText={updateDescription}
              />
            </Section>
            <Section header={i18n.t('ingredients')}>
              {Object.keys(ingredients).map(id => {
                const ingredient = ingredients[id];
                return <FormIngredientCell key={id} ingredient={ingredient} onChange={updateIngredient} />;
              })}
              <FormButtonCell title={`+ ${i18n.t('add')}`} onPress={addIngredient} />
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

const mapStateToProps = ({ ui: { addRecipeForm: { newRecipe, canBeSubmitted } } }) => ({ newRecipe, canBeSubmitted });

const mapDispatchToProps = {
  updateName: actionCreators.addRecipeFormUpdateName,
  updateDescription: actionCreators.addRecipeFormUpdateDescription,
  addIngredient: actionCreators.addRecipeFormAddIngredient,
  updateIngredient: actionCreators.addRecipeFormUpdateIngredient,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);
