import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet,ActivityIndicator,Switch,Alert } from 'react-native';
import {Container,Header,Content,Card,CardItem,
  Text,Body,Button, Input, Item, Icon, View} from 'native-base';
  import { Font } from "expo";
import api from '../registro/api';


class Login extends Component{

      state={switchValue:false}
      toggleSwitch = (value) =>{
        this.setState({switchValue:value})
      }

      constructor(props){
        super(props);
        this.state={username:'',pass:''};
      }

      login = async () => {
        let validarLog = await api.validarLog(this.state.username, this.state.pass)
    
        if(validarLog.status == 1){
          this.props.navigation.navigate('Perfil');
        }
        else{
          Alert.alert('Usuario o clave invalidos');
        }}

         /*state={showIndicator:false}
        onButtonPress= () =>{
          this.setState({showIndicator:true
          }),this.props.navigation.navigate('Perfil',{pass: this.state.pass, username:this.state.username})

          /*icononos
          type='FontAwesome' name='user'
           <Icon type='FontAwesome' name='lock'></Icon>
            import * as Font from 'expo-font';
        };*/


    render(){
      const navegar= this.props.navigation;

      if(this.state.showIndicator){
        return(
          <View style={misEstilos.content}>
            <ActivityIndicator size="large" color="#36FF0E"/>
          </View>
      
        );
        }else{
    return (
    <>
    <Container>
    <Text>{this.state.switchValue?'Switch is ON':'Switch is OFF'}</Text>
      <Switch onValueChange={this.toggleSwitch}
      value={this.state.switchValue}/>
        <Header/>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Inicio de Sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={misEstilos.body}>
                <Item inlineLabel>
                
                <Input placeholder='Nombre de Usuario' 
                onChangeText={(username)=>this.setState({username})}></Input>
                </Item>
                <Item inlineLabel last>
               
                <Input placeholder='Contraseña' 
                onChangeText={(pass)=>this.setState({pass})}></Input>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>

            <Button primary style={misEstilos.boton1} 
                onPress={() =>{this.onButtonPress, navegar.navigate('Registro',
                {titulo:'Registro usuario',
                nombre:'David'})}}><Text>Registrate</Text>
            </Button>

            <Button primary style={misEstilos.boton} 
              onPress={() => {this.login() }}><Text>Iniciar Sesión</Text>
            </Button>
              
            </CardItem>

            <CardItem footer bordered>
            <Button primary style={misEstilos.boton1} 
            onPress={() =>{this.onButtonPress, navegar.navigate('Api',)}}><Text>Api Peliculas</Text></Button>
            
            <Button primary style={misEstilos.boton2} 
            onPress={() =>{this.onButtonPress, navegar.navigate('Apis',)}}><Text>Api Pokemon</Text></Button>
            </CardItem>
          </Card>
         
        
        </Content>
      </Container>
    </>
  );
    }
    }
}

const misEstilos = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',

  },
  contents:{
    flex:3,
    justifyContent:'center',

  },
  textCenter:{
    textAlign:'center',
    width:'100%',

  },
  boton:{
    marginLeft:'20%'
  },
  body:{
    paddingVertical:35,
  },
  boton1:{
    marginLeft:'0%'

  },
  boton2:{
    marginLeft:'15%'
  },
  switch:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Login;