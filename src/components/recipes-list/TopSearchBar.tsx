import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { Colors, StylesConstants } from 'src/assets/constants';
import i18n from 'src/assets/i18n';
import { SearchBar } from 'react-native-elements';
import { actionCreators } from 'src/redux/reducers/ui';
import { getRecipesSearchInputText } from 'src/redux/selectors';

interface Props {
  updateRecipesSearchInputText: typeof actionCreators.updateRecipesSearchInputText;
  showClearIcon?: boolean;
}

const TopSearchBar = ({ updateRecipesSearchInputText, showClearIcon = false }: Props) => (
  <View style={styles.container}>
    <SearchBar
      lightTheme
      round
      containerStyle={styles.searchBar}
      inputStyle={styles.searchBarInput}
      onChangeText={updateRecipesSearchInputText}
      placeholder={i18n.t('search')}
      placeholderTextColor={Colors.searchBarPlaceholderTextColor}
      selectionColor={Colors.searchBarTextColor}
      icon={{ color: Colors.searchBarPlaceholderTextColor, name: 'search' }}
      clearIcon={showClearIcon ? { color: Colors.searchBarPlaceholderTextColor, name: 'clear' } : undefined}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
  },
  searchBar: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  searchBarInput: {
    backgroundColor: Colors.darkPrimaryColor,
    color: Colors.searchBarTextColor,
    fontFamily: StylesConstants.fontFamily,
  },
});

const mapStateToProps = state => ({ showClearIcon: getRecipesSearchInputText(state).length });

const mapDispatchToProps = {
  updateRecipesSearchInputText: actionCreators.updateRecipesSearchInputText,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSearchBar);
