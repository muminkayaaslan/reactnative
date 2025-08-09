import { useState } from 'react';
import {
  View,
  Pressable,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import { StackParamsList } from '../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<StackParamsList>;

export function Login() {
  //const auth = useEmailPasswordAuth();
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const navigation = useNavigation<NavigationProp>();
  const handleLogin = async () => {
    if (email.trim() === '') {
      Toast.show('E-mail alanı boş', Toast.SHORT);
      return;
    }

    if (!email.includes('@') || !email.endsWith('.com')) {
      Toast.show('Geçerli bir e-mail girin', Toast.SHORT);
      return;
    }

    if (passwd.length < 6) {
      Toast.show('Şifre en az 6 karakter olmalı', Toast.SHORT);
      return;
    }
    try {
      // auth.logIn'i geçici olarak yoruma alın
      //await auth.logIn({ email:'mkysln4@gmail.com', password: 'mmnk42' });
      console.log('Giriş başarılıymış gibi davranılıyor');
      Toast.show('Giriş Başarılı (Test)', Toast.SHORT);
      navigation.navigate('Main');
    } catch (error: any) {
      console.error('Giriş Hatası:', error);
      Toast.show('Başarısız Giriş: ' + error.message, Toast.LONG);
    }
  };

  return (
    <ImageBackground
      style={styles.screen}
      source={require('../../assets/images/background.jpg')}
      resizeMode="cover"
    >
      <View style={styles.head}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logomeet.png')}
        />
      </View>

      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            flex: 0.8,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              textAlign="center"
              cursorColor="red"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              placeholder="e-mail"
              placeholderTextColor="white"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              textAlign="center"
              cursorColor="red"
              style={styles.textInput}
              value={passwd}
              onChangeText={setPasswd}
              placeholder="password"
              placeholderTextColor="white"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>LogIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    width: 200,
    marginBottom: 20,
    position: 'relative',
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
    zIndex: 1,
  },
  button: {
    width: '50%',
    borderColor: 'rgb(128,128,128)',
    borderWidth: 2,
    borderRadius: 9,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#b514ffff', // Neon yeşili
    fontWeight: 'bold',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  head: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 100,
  },
  registerBtn: {
    color: 'pink',
  },
});

export default Login;
