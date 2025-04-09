import React from 'react';
import { useState } from 'react'
import {Text, View, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const FaleConosco = (navigation) => {
    const [Nome, useNome] = useState('');
    const [Email, useEmail] = useState('');
    const [Mensagem, useMensagem] = useState('');

  return (
    <View>
        <Image 
            source={require('../Imgs/fale-conosco.png')} 
            // style={{width: 140, height: 140}}
        />
        <Text>Nome:</Text>
        <TextInput
            onChangeText={useNome}
            value={Nome}
        />
        <Text>Email:</Text>
        <TextInput
            onChangeText={useEmail}
            value={Email}
        />
        <Text>Mensagem:</Text>
        <TextInput
            onChangeText={useMensagem}
            value={Mensagem}
        />

        <Text>Olá, {Nome} do E-mail: {Email} sua mensagem: {Mensagem}</Text>
    </View>

  )
}

export default FaleConosco