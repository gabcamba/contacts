import React from 'react';
import {View, Text, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import NavBar from './navBar';

const Favorites = ({navigation}) => {
  return (
    <View style={{margin: 30, backgroundColor: 'powderBlue', flexDirection: 'column', flex: 1, alignContent: 'stretch'}}>
      <TouchableOpacity style={{backgroundColor: 'lightgreen', flex: 1, borderRadius: 20, marginBottom: 20, elevation: 5}}>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'green', flex: 1, borderRadius: 20, marginBottom: 20, elevation: 5}}>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'darkgreen', flex: 1, borderRadius: 20, marginBottom: 20, elevation: 5}}>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'darkgray', flex: 1, borderRadius: 20, marginBottom: 20, elevation: 5}}>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'black', flex: 1, borderRadius: 20, marginBottom: 20, elevation: 5}}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Favorites;
