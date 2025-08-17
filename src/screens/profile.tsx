import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { View, StyleSheet, FlatList } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../utils/types';
import { useNavigation } from '@react-navigation/native';

type navigationProp = NativeStackNavigationProp<StackParamsList>;
function Settings() {
  const settings = [
    'Profile Settings',
    'Account',
    'Manage Comments',
    'Edit Comments',
    'Log Out',
  ];
  const icons = [
    'people-circle-outline',
    'person-circle-outline',
    'color-wand-outline',
    'create-outline',
    'log-out-outline',
  ];
  const navigation = useNavigation<navigationProp>();
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.hdTitle}>Settings</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={settings}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                if (item === 'Log Out') {
                  navigation.navigate('Splash');
                }
              }}
            >
              <Ionicons
                style={styles.icon}
                name={icons[index] as any}
                size={20}
                color={'white'}
              />
              <Text style={styles.itext}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#392a3bff',
  },
  icon: {
    marginRight: 4,
  },
  item: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: 'rgba(47, 0, 255, 0.34)',
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itext: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
  },
  header: {
    height: 70,
    width: '100%',
    backgroundColor: 'rgb(10, 13, 99)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hdTitle: {
    fontSize: 25,
    color: 'white',
  },
});

export default Settings;
