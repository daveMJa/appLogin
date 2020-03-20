import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Font } from "expo";
import api from './api';

import {Container,Header,Content,Card,CardItem,Text,Body,Button, Input, Item, Icon} from 'native-base';

class Registro extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      user: '',
      pass: ''
    }
  }
  

  register = () => api.registerData(this.state.email, this.state.user, this.state.pass);
   
  render(){
    const navegar= this.props.navigation;
  return (
    <Container>
        <Header/>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Registro</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={misEstilos.body}>
              <Item inlineLabel>
                <Button style={misEstilos.boton2} primary ><Icon type='Entypo' name='facebook' style={misEstilos.imgCenter}></Icon></Button>
                <Button style={misEstilos.boton2} danger><Icon type='AntDesign' name='googleplus'style={misEstilos.imgCenter}></Icon></Button>
              </Item>
                <Item inlineLabel>
                <Icon type='Entypo' name='mail'></Icon>
                    <Input placeholder='Correo' onChangeText = {(email) => this.setState({email})}></Input>
                </Item>
                <Item inlineLabel>
                 
                  <Icon type='FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre' onChangeText = {(user) => this.setState({user})}></Input>
                </Item>
                
                <Item inlineLabel last>
                <Icon type='FontAwesome' name='lock'></Icon>
                <Input placeholder='Contraseña' onChangeText = {(pass) => this.setState({pass})}></Input>
                </Item>

              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={misEstilos.boton} onPress = {this.register}><Text>Registrate</Text></Button>
            </CardItem>
          </Card>
         
        
        </Content>
      </Container>
  );
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
  imgCenter:{
    textAlign:'center',
    width:'80%',

  },
  boton:{
    marginLeft:'60%'
  },
  body:{
    paddingVertical:35,
  },
  boton2:{
    flex:2
  }
});

export default Registro;