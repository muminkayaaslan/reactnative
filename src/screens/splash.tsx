import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { StackParamsList } from '../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<StackParamsList>;
export function SplashScreen() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <LinearGradient
      colors={['#8c52ff', 'rgb(10, 13, 99)']}
      style={styles.screen}
    >
      <StatusBar barStyle="light-content" backgroundColor="#1A2980" />

      {/* Logo */}
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={require('../../assets/images/logomeet.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Başlık */}
      <Animatable.Text animation="fadeInDown" delay={500} style={styles.title}>
        Welcome to Fantasia
      </Animatable.Text>

      {/* Alt açıklama */}
      <Animatable.Text animation="fadeInUp" delay={800} style={styles.subtitle}>
        Dive into a magical experience
      </Animatable.Text>

      {/* Butonlar */}
      <View style={styles.buttonContainer}>
        <Animatable.View animation="fadeInLeft" delay={1000}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.loginButton}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInRight" delay={1200}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.registerButton}
          >
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </LinearGradient>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
    borderRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#f1f1f1',
    marginTop: 10,
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  loginButton: {
    backgroundColor: '#ffffff20',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  registerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A2980',
  },
});
