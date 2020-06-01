import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
      {{errorMessage} ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
