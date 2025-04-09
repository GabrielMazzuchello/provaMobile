import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Login from './screns/Login';
import Estoque from './screns/Estoque';
import FaleConosco from './screns/FaleConosco';

function drawrNav() {
  const Drawer = createDrawerNavigator();
  
   return (
    <Drawer.Navigator>
      <Drawer.Screen name="Estoque" component={Estoque} />
      <Drawer.Screen name="Fale conosco" component={FaleConosco} />
    </Drawer.Navigator>
  );
}



export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="drawrNav" children={drawrNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
