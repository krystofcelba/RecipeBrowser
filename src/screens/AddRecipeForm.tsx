import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Section, TableView } from 'react-native-tableview-simple';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form/immutable';
import { Map } from 'immutable';

import { validateNewRecipeFormValues } from 'src/utils';
import i18n from 'src/assets/i18n';
import AppTheme from 'src/assets/appTheme';
import { KeyboardAvoidingView } from 'src/components/common';
import {
  FormImageInput,
  TextInputCell,
  IngredientInputsCell,
  FieldArraySection,
  ErrorsSectionFooter,
} from 'src/components/new-recipe-form';
import { actionCreators } from 'src/redux/reducers/ui';

interface Props {
  navigator: any;
  validationErrors: any;
  invalid: boolean;
  submit: () => Promise<any>;
}

export class AddRecipeFormComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.updateNavigatorButtons(this.props.invalid);
  }

  componentWillReceiveProps(nextProps: Props) {
    const { invalid } = nextProps;
    if (invalid !== this.props.invalid) {
      this.updateNavigatorButtons(invalid);
    }
  }

  onNavigatorEvent = event => {
    switch (event.type) {
      case 'NavBarButtonPress':
        const { navigator, submit } = this.props;
        if (event.id === 'cancel') {
          navigator.dismissModal();
        } else if (event.id === 'add') {
          submit();
        }
        break;
      default:
        break;
    }
  };

  updateNavigatorButtons = invalid => {
    const { navigator } = this.props;
    navigator.setButtons({
      rightButtons: [
        {
          title: i18n.t('add'),
          id: 'add',
          testID: 'add',
          disabled: invalid,
          buttonColor: AppTheme.topBarTextColor,
        },
      ],
      leftButtons: [
        {
          title: i18n.t('cancel'),
          id: 'cancel',
          testID: 'cancel',
          buttonColor: AppTheme.topBarTextColor,
        },
      ],
    });
  };

  render() {
    const { validationErrors } = this.props;
    return (
      <KeyboardAvoidingView testID="addRecipeFormScreen" style={styles.container}>
        <ScrollView>
          <TableView>
            <Field name="image" component={FormImageInput} />
            <Section
              sectionPaddingTop={0}
              footerComponent={
                <ErrorsSectionFooter
                  testIDcontext="base"
                  errors={{ name: validationErrors.name, description: validationErrors.description }}
                />
              }
            >
              <TextInputCell name="name" placeholder={i18n.t('name')} />
              <TextInputCell name="description" placeholder={i18n.t('description')} numberOfLines={4} />
            </Section>
            <FieldArray
              name="ingredients"
              component={FieldArraySection}
              fieldComponent={IngredientInputsCell}
              header={i18n.t('ingredients')}
              errors={validationErrors.ingredients}
              testIDcontext="ingredients"
            />
            <FieldArray
              name="seasonings"
              component={FieldArraySection}
              fieldComponent={TextInputCell}
              header={i18n.t('seasonings')}
              placeholder={i18n.t('seasoning')}
              errors={validationErrors.seasonings}
              testIDcontext="seasonings"
            />
            <FieldArray
              name="steps"
              component={FieldArraySection}
              fieldComponent={TextInputCell}
              header={i18n.t('steps')}
              placeholder={i18n.t('step')}
              errors={validationErrors.steps}
              testIDcontext="steps"
            />
          </TableView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
    flex: 1,
  },
});

const mapStateToProps = ({ form }: { form: Map<string, any> }) => ({
  validationErrors:
    form.get('newRecipe') && form.get('newRecipe').get('syncErrors') ? form.get('newRecipe').get('syncErrors') : {},
});

const onSubmit = (immutableValues: Map<string, any>, dispatch) => {
  const values = immutableValues.toJS();
  dispatch(actionCreators.submitAddRecipeForm(values));
};

export default connect(mapStateToProps)(
  reduxForm({
    form: 'newRecipe',
    validate: validateNewRecipeFormValues,
    onSubmit,
  })(AddRecipeFormComponent),
);
