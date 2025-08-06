/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet, View, Pressable, Text, ImageBackground, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';

function Login(){
  //const auth = useEmailPasswordAuth();
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const navigation = useNavigation();
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
    navigation.navigate("Home");
  } catch (error: any) {
    console.error('Giriş Hatası:', error);
    Toast.show('Başarısız Giriş: ' + error.message, Toast.LONG);
  }
  };

    return(
         <ImageBackground
      style={styles.screen}
      source={require('../../assets/images/realbg.jpg')}
      resizeMode="cover"
    >

  <View style={styles.container}>
    <View style={{justifyContent:'center', flex:0.8, width:'100%', alignItems:'center'}}>   
     <View style={styles.inputContainer}>
          <BlurView
            style={styles.textInputBlur}
            blurType="dark" // Daha az karartma için 'light' kullanıyoruz
            blurAmount={10}
            overlayColor="rgba(0, 0, 0, 0.1)" // Hafif şeffaf beyaz katman
            reducedTransparencyFallbackColor="black"
          />
          <TextInput
            textAlign="center"
            cursorColor="red"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="e-mail"
            placeholderTextColor="white"
            keyboardType='email-address'/>
        </View>

        <View style={styles.inputContainer}>
          <BlurView
            style={styles.textInputBlur}
            blurType="dark" // Daha az karartma için 'light' kullanıyoruz
            blurAmount={10}
            overlayColor="rgba(0, 0, 0, 0.1)" // Hafif şeffaf beyaz katman
            reducedTransparencyFallbackColor="black"/>
          <TextInput
            textAlign="center"
            cursorColor="red"
            style={styles.textInput}
            value={passwd}
            onChangeText={setPasswd}
            placeholder="password"
            placeholderTextColor="white"
            secureTextEntry/>
        </View>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={handleLogin}>
              <Text style={styles.text}>LogIn</Text>
          </Pressable>
          
        </View>
        <View>
          <Pressable
          onPress={() =>
          {
           navigation.navigate('Register') 
          }
          }>
            <Text>Register{'>'}</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
    )
}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection:'column',
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
  textInputBlur: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
  },
  textInput: {
    borderColor: '#ff66b2',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent',
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
    color: '#39ff14', // Neon yeşili
    fontWeight: 'bold',
    textShadowColor: '#39ff14',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  pressed: {
    opacity: 0.6,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  logo: {
    width:100,
    height:100
  },
  head:{
    flex:0.2,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
   
  },
  registerBtn:{
    color:'pink'
  }
});


export default Login;