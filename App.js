import 'react-native-gesture-handler';
import React from 'react';
import Registro from './registro/Registro';
import Login from './login/Login';
import Perfil from './perfil/perfil';
import Api from './api/Api';
import Apis from './api/Apis';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () =>React$Node = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Login'>
       <Stack.Screen 
       name='Login'
       component={Login}/>
       <Stack.Screen 
       name='Registro'
       component={Registro}/>
       <Stack.Screen 
       name='Api'
       component={Api}/>
        <Stack.Screen 
       name='Apis'
       component={Apis}/>
        <Stack.Screen 
       name='Perfil'
       component={Perfil}/>
     </Stack.Navigator>
   </NavigationContainer>
    );
  };





export default App;