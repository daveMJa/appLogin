import React,{Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Apis extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading: true
        }
    }

    async componentWillMount(){
        try{
            const response =
                await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
            const responseJson = await response.json()

            this.setState({
                isLoading: false,
                dataSource: responseJson.results,
            }, function(){
            });
        }
        catch (error){
            console.error(error);
        };
    }

    render(){
        const navegar = this.props.navigation;
        if(this.state.isLoading){
            return(
                <View style={{flex:1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return(
            <View style={{flex:1, padding:20}}>
                
                <FlatList data={this.state.dataSource}
                renderItem={({item}) => 
                <Text>{item.name}, {item.url}</Text>}
                keyExtractor={({id},index) => id}
                />

<Text>dsajddlasj</Text>
            </View>
            
        );
    }

}

export default Apis;