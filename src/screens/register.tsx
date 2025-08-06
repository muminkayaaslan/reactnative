import React, { useState } from "react";
import {View,Text,TextInput, StyleSheet} from 'react-native';


function Register() {
    const [user,setUser] = useState('');
    return(
        <View style={styles.screen}> 
            <Text>Hello World</Text>
            <TextInput style={styles.textinp} value={user} onChangeText={setUser} placeholder="hellloooo" />
        </View>
    )
}


const styles = StyleSheet.create(
    {
        screen:{
            flexDirection:'column',
            backgroundColor:'blue',
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        textinp:{
            borderColor:'red',
            borderRadius:8,
            borderWidth:1
        }
    }
)


export default Register;