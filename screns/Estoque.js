import React, { useState } from 'react'
import {Text, View, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



const Estoque = (navigation) => {
    const [count1, setCaunt1] = useState(0);
    const [count2, setCaunt2] = useState(0);
    const [count3, setCaunt3] = useState(0);
    const [count4, setCaunt4] = useState(0);
    const [count5, setCaunt5] = useState(0);

    function produtoIncremento1 () {

        setCaunt1(count1 + 1);

    }

    function produtoDecremento1 () { 
        if (count1 != 0) {
            setCaunt1(count1 - 1);
        }      

    }

    function produtoIncremento2 () {

        setCaunt2(count2 + 1);

    }

    function produtoDecremento2 () { 
        if (count1 != 0) {
            setCaunt2(count2 - 1);
        }      

    }

    function produtoIncremento3 () {

        setCaunt3(count3 + 1);

    }

    function produtoDecremento3 () { 
        if (count3 != 0) {
            setCaunt3(count3 - 1);
        }      

    }

    function produtoIncremento4 () {

        setCaunt4(count4 + 1);

    }

    function produtoDecremento4 () { 
        if (count4 != 0) {
            setCaunt4(count4 - 1);
        }      

    }

    function produtoIncremento5 () {

        setCaunt5(count5 + 1);

    }

    function produtoDecremento5 () { 
        if (count5 != 0) {
            setCaunt4(count5 - 1);
        }      

    }


  return (
    <ScrollView > 
        <View>
            <View>
                <Image 
                    source={require('../Imgs/xbox.jpg')} 
                    style={{width: 140, height: 140}}
                />
                <Text>Xbox</Text>
                <Text>Novo console de jogos Xbos</Text>
                <Text>Quantidade: {count1}</Text>
                <TouchableOpacity onPress={produtoIncremento1}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={produtoDecremento1}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image 
                    source={require('../Imgs/pc-simples.webp')} 
                    style={{width: 140, height: 140}}
                />
                <Text>PC HQ</Text>
                <Text>Novo computador simples</Text>
                <Text>Quantidade: {count2}</Text>
                <TouchableOpacity onPress={produtoIncremento2}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={produtoDecremento2}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image 
                    source={require('../Imgs/pc-simplesPlus.webp')} 
                    style={{width: 140, height: 140}}
                />
                <Text>Xbox</Text>
                <Text>Novo Computador HQ</Text>
                <Text>Quantidade: {count3}</Text>
                <TouchableOpacity onPress={produtoIncremento3}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={produtoDecremento3}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image 
                    source={require('../Imgs/pc-gamerPreto.jpg')} 
                    style={{width: 140, height: 140}}
                />
                <Text>Xbox</Text>
                <Text>Novo computador gamer preto</Text>
                <Text>Quantidade: {count4}</Text>
                <TouchableOpacity onPress={produtoIncremento4}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={produtoDecremento4}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image 
                    source={require('../Imgs/pc-gamerBranco.jpg')} 
                    style={{width: 140, height: 140}}
                />
                <Text>Xbox</Text>
                <Text>Novo computador gamer branco</Text>
                <Text>Quantidade: {count5}</Text>
                <TouchableOpacity onPress={produtoIncremento5}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={produtoDecremento5}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    
  )
}

export default Estoque