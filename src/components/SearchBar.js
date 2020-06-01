import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Ionicons name="md-search" size={30}/>
      <Text>Search Bar</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20
  }
});

export default SearchBar;
