import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';

function Register() {
  console.log('register geldi');
  function alert(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <ImageBackground
      style={styles.screen}
      source={require('../../assets/images/background.jpg')}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="username"
          placeholderTextColor={'white'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="e-mail"
          placeholderTextColor={'white'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          placeholderTextColor={'white'}
          secureTextEntry
        />
        <TextInput
          style={styles.textInput}
          placeholder="password try"
          placeholderTextColor={'white'}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => {
            alert('kayıt olunfdu');
          }}
          style={styles.regButton}
        >
          <Text>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#ff66b2',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(128,128,128,0.2)',
    marginVertical: 5,
    maxWidth: '50%',
    alignItems: 'center',
  },
  regButton: {
    width: '50%',
    borderColor: 'rgb(128,128,128)',
    borderWidth: 2,
    borderRadius: 9,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    padding: 10,
  },
});

export default Register;
