import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import AppTheme from 'src/assets/appTheme';
import i18n from 'src/assets/i18n';
import { SearchBar } from 'react-native-elements';
import { actionCreators } from 'src/redux/reducers/ui';
import { getRecipesSearchInputText } from 'src/redux/selectors';

interface Props {
  updateRecipesSearchInputText: typeof actionCreators.updateRecipesSearchInputText;
  showClearIcon?: boolean;
}

const TopSearchBar = ({ updateRecipesSearchInputText, showClearIcon }: Props) => (
  <View style={styles.container}>
    <SearchBar
      testID="topSearchBar"
      lightTheme
      round
      containerStyle={styles.searchBar}
      inputStyle={styles.searchBarInput}
      onChangeText={updateRecipesSearchInputText}
      placeholder={i18n.t('search')}
      placeholderTextColor={AppTheme.searchBarPlaceholderTextColor}
      selectionColor={AppTheme.topBarTextColor}
      icon={{ color: AppTheme.searchBarPlaceholderTextColor, name: 'search' }}
      clearIcon={showClearIcon ? { color: AppTheme.searchBarPlaceholderTextColor, name: 'clear' } : undefined}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: AppTheme.primaryColor,
  },
  searchBar: {
    flex: 1,
    backgroundColor: AppTheme.primaryColor,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  searchBarInput: {
    backgroundColor: AppTheme.darkPrimaryColor,
    color: AppTheme.topBarTextColor,
    fontFamily: AppTheme.fontFamily,
  },
});

const mapStateToProps = state => ({ showClearIcon: getRecipesSearchInputText(state).length });

const mapDispatchToProps = {
  updateRecipesSearchInputText: actionCreators.updateRecipesSearchInputText,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSearchBar);
