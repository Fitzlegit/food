import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name="md-search" style={styles.iconStyle} />
      <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Search"
      style={styles.inputStyle}
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#E8E8E8',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15
  }

});

export default SearchBar;
