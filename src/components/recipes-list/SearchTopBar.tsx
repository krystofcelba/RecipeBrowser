import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { Colors } from 'src/assets/constants';
import i18n from 'src/assets/i18n';
import { SearchBar } from 'react-native-elements';

interface Props {
  title: string;
}

export default class SearchTopBar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSearchBarTextChange = () => {};

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          round
          containerStyle={styles.searchBar}
          inputStyle={styles.searchBarInput}
          onChangeText={this.onSearchBarTextChange}
          placeholder={i18n.t('search')}
          placeholderTextColor={Colors.searchBarPlaceholderTextColor}
          selectionColor={Colors.searchBarTextColor}
          icon={{ color: Colors.searchBarPlaceholderTextColor, name: 'search' }}
        />
      </View>
    );
  }
}

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
  },
});
