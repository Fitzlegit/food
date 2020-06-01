import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    <View>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
      {{errorMessage} ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <View>
        <ResultList
          title="Cheap Eats"
          results={filterResultsByPrice('$')}
        />
        <ResultList
          title="Bit Pricer"
          results={filterResultsByPrice('$$')}
        />
        <ResultList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
        <ResultList
          title="Winner, Winner Chicken Dinner!"
          results={filterResultsByPrice('$$$$')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
