import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import { useMovies } from '../constants/movieContext';
import { Movie } from '../services/datainterface';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../utils/types';
import Ionicons from '@react-native-vector-icons/ionicons';

type NavigationProp = NativeStackNavigationProp<StackParamsList, 'Main'>;

function Discovery() {
  const { movies, loading, error } = useMovies();
  const [search, setSearch] = useState<string>('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);
  useEffect(() => {
    const lowerSearch = typeof search === 'string' ? search.toLowerCase() : '';
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(lowerSearch)
    );
    setFilteredMovies(filtered);
  }, [search, movies]);
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.screen}>
      <SearchBar
        containerStyle={styles.searchBar}
        placeholder="Ara..."
        searchIcon={
          <Ionicons name="search-outline" size={20} color={'white'} />
        }
        clearIcon={
          <Ionicons
            onPress={() => setSearch('')}
            name="remove-circle-outline"
            size={20}
            color={'white'}
          />
        }
        onChange={setSearch} // <-- bu satır değişti
        value={search}
        containerStyle={styles.sbContainerSty}
        inputStyle={styles.sbInputSty}
        cursorColor="#192FD4"
        selectionColor={'rgba(0, 183, 255, 0.3)'}
        selectionHandleColor={'#192FD4'}
      />
      <View style={styles.container}>
        <FlatList
          data={filteredMovies}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', { movieId: item._id });
              }}
            >
              <View style={styles.flatListSty}>
                <Text style={styles.flatText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#4859DB',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
  searchBar: {
    width: '100%',
    height: 'auto',
    borderRadius: 9,
  },
  sbInputSty: {
    color: 'white',
    fontWeight: 'regular',
    fontFamily: 'Poppins',
  },
  sbContainerSty: {
    padding: 0,
  },
  flatListSty: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    marginVertical: 2,
    height: 50,
  },
  flatText: {
    color: 'white',
    fontWeight: 'semibold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Discovery;
