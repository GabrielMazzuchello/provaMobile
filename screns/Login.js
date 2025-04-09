import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Estoque from './Estoque';

const Login = (navigation) => {
    return (
        <View>
            <TextInput
                value='E-mail'
            />

            <TextInput
                value='Senha'
            />

            <TouchableOpacity onPress={() =>
                navigation.navigate('drawr')} >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
      );
    };


export default Login;