import Ionicons from '@react-native-vector-icons/ionicons';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { ProfileDrawer } from '../components/ProfileDrawer';

function Profile() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableHighlight style={styles.menuBtn} onPress={() => {}}>
          <Ionicons name={'menu-outline'} size={30} color={'white'} />
        </TouchableHighlight>
      </View>

      <View style={styles.container}>
        <View style={styles.profileView}>
          <Ionicons name={'person-outline'} color={'white'} size={100} />
          <Text style={styles.usrnmSty}> Username</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#192FD4',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
  },
  profileView: {
    flex: 0.3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  usrnmSty: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 5,
  },
  menuBtn: {
    margin: 17,
  },
  header: {
    backgroundColor: 'rgb(10, 13, 99)',
    width: '100%',
    alignItems: 'flex-end',
    borderRadius: 0,
  },
});

export default Profile;

/*

buraya özel topbar eklenip menu butonu ile birlikte bu arkadaşı ekle
      {visible && (
        <ProfileDrawer
          visible={drwVisible}
          onClose={() => setDrwVisible(false)}
        />
      )}
        */
