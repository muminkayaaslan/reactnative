/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Movie } from '../services/datainterface';
import PagerView from 'react-native-pager-view';
import Icon from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMovies } from '../constants/movieContext';
import { StackParamsList } from '../utils/types';

function Home() {
  const navigation = useNavigation<StackParamsList>();
  const { movies, loading, error } = useMovies();

  if (loading)
    return (
      <View style={styles.container}>
        {Platform.OS === 'android' ? (
          <ActivityIndicator style={{ flex: 1 }} size="20%" color={'red'} />
        ) : (
          <ActivityIndicator style={{ flex: 1 }} size="large" />
        )}
      </View>
    );
  if (error)
    return (
      <View style={styles.container}>
        <Text style={{ flex: 1, color: 'red' }}>{error}</Text>;
      </View>
    );
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <PagerView style={{ flex: 1 }} initialPage={0}>
          {movies
            .filter(item => item.poster && item.poster.trim() !== '')
            .map((item, index) => (
              <View style={styles.itemContent} key={item._id || index}>
                <View style={styles.mvPoster}>
                  <Image
                    style={styles.mvImage}
                    source={
                      item.poster && item.poster !== ' '
                        ? { uri: item.poster }
                        : require('../../assets/images/scooter.png')
                    }
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.mvTitle}>{item.title}</Text>
                  <TouchableOpacity
                    style={styles.mvDetails}
                    onPress={() => {
                      if (item?._id) {
                        navigation.navigate('Details', { movieId: item._id });
                      }
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 15,
                          textAlign: 'center',
                        }}
                      >
                        Details
                      </Text>
                      <Icon name="chevron-forward" color={'white'} size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </PagerView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: { flex: 1, backgroundColor: 'black', color: 'white' },
  item: {
    flexDirection: 'column',
    fontSize: 18,
    marginVertical: 5,
    padding: 5,
  },
  itemContent: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
    borderColor: '#C648DB',
    borderWidth: 1,
    color: 'white',
    padding: 10,
    backgroundColor: 'rgb(66, 10, 99)',
  },
  mvPoster: {
    flex: 3,
    width: '100%',
    borderColor: 'darkblue',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 5,

    backgroundColor: 'transparent',
  },
  mvImage: {
    height: '100%',
    width: '100%',
  },
  mvTitle: {
    color: 'rgb(153,255,255)',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 20,
  },
  mvDetails: {
    borderColor: '#4859DB',
    borderWidth: 1,
    width: 75,
    height: 40,
    color: 'white',
    borderRadius: 9,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 10,
    flexDirection: 'row',
  },
});

export default Home;

/*
 
          
*/
