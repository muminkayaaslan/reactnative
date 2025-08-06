import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackParamsList } from '../utils/types';

type DetailScreenProp = RouteProp<StackParamsList, 'Details'>;
function Detail({ route }: { route: DetailScreenProp }) {
  const { movieId } = route.params;
  return (
    <View style={styles.screen}>
      <Text>{movieId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Detail;
