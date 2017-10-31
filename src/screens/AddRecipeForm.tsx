import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Section, TableView } from 'react-native-tableview-simple';
import Icon from 'react-native-vector-icons/Ionicons';

import i18n from '../assets/i18n';
import FormInputCell from '../components/new-recipe-form/FormInputCell';
import FormButtonCell from '../components/new-recipe-form/FormButtonCell';
import FormIngredientCell from '../components/new-recipe-form/FormIngredientCell';
import FormSeasoningCell from '../components/new-recipe-form/FormSeasoningCell';
import FormStepCell from '../components/new-recipe-form/FormStepCell';
import { actionCreators, NewRecipe } from '../redux/reducers/ui';
import { getAddRecipeFormState } from '../redux/selectors';

interface Props {
  navigator: any;
  newRecipe: NewRecipe;
  updateName: typeof actionCreators.updateNameInAddRecipeForm;
  updateDescription: typeof actionCreators.updateDescriptionInAddRecipeForm;
  addIngredient: typeof actionCreators.addIngredientToAddRecipeForm;
  updateIngredient: typeof actionCreators.updateIngredientInAddRecipeForm;
  addSeasoning: typeof actionCreators.addSeasoningToAddRecipeForm;
  updateSeasoning: typeof actionCreators.updateSeasoningInAddRecipeForm;
  addStep: typeof actionCreators.addStepToAddRecipeForm;
  updateStep: typeof actionCreators.updateStepInAddRecipeForm;
  openImagePicker: typeof actionCreators.openImagePickerAddRecipeForm;
  updateImage: typeof actionCreators.updateImageInAddRecipeForm;
  resetForm: typeof actionCreators.resetAddRecipeForm;
  submitForm: typeof actionCreators.submitAddRecipeForm;
}

class AddRecipeForm extends Component<Props> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: i18n.t('add'),
        id: 'add',
      },
    ],
    leftButtons: [
      {
        title: i18n.t('cancel'),
        id: 'cancel',
      },
    ],
  };

  onNavigatorEvent = event => {
    switch (event.type) {
      case 'NavBarButtonPress':
        const { navigator, resetForm, submitForm } = this.props;
        if (event.id === 'cancel') {
          resetForm();
          navigator.dismissModal();
        } else if (event.id === 'add') {
          submitForm();
        }
        break;
      default:
        break;
    }
  };

  render() {
    const {
      newRecipe: { name, description, ingredients, seasonings, steps, image },
      updateName,
      updateDescription,
      addIngredient,
      updateIngredient,
      addSeasoning,
      updateSeasoning,
      addStep,
      updateStep,
      openImagePicker,
    } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.imageContainer} onPress={openImagePicker}>
            {image ? (
              <Image style={styles.recipeImage} source={image} resizeMode="cover" />
            ) : (
              <Icon name="ios-images-outline" size={100} />
            )}
          </TouchableOpacity>
          <TableView>
            <Section sectionPaddingTop={0}>
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
            <Section header={i18n.t('seasonings')}>
              {Object.keys(seasonings).map(id => {
                return <FormSeasoningCell key={id} seasoning={seasonings[id]} onChange={updateSeasoning} />;
              })}
              <FormButtonCell title={`+ ${i18n.t('add')}`} onPress={addSeasoning} />
            </Section>
            <Section header={i18n.t('steps')}>
              {Object.keys(steps).map(id => {
                return <FormStepCell key={id} step={steps[id]} onChange={updateStep} />;
              })}
              <FormButtonCell title={`+ ${i18n.t('add')}`} onPress={addStep} />
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
  imageContainer: {
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeImage: {
    flexGrow: 1,
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({ newRecipe: getAddRecipeFormState(state) });

const mapDispatchToProps = {
  updateName: actionCreators.updateNameInAddRecipeForm,
  updateDescription: actionCreators.updateDescriptionInAddRecipeForm,
  addIngredient: actionCreators.addIngredientToAddRecipeForm,
  updateIngredient: actionCreators.updateIngredientInAddRecipeForm,
  addSeasoning: actionCreators.addSeasoningToAddRecipeForm,
  updateSeasoning: actionCreators.updateSeasoningInAddRecipeForm,
  addStep: actionCreators.addStepToAddRecipeForm,
  updateStep: actionCreators.updateStepInAddRecipeForm,
  openImagePicker: actionCreators.openImagePickerAddRecipeForm,
  updateImage: actionCreators.updateImageInAddRecipeForm,
  resetForm: actionCreators.resetAddRecipeForm,
  submitForm: actionCreators.submitAddRecipeForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);
