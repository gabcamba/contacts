import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

const TopBar = ({theme, isDark, toggle, toggleForm}) => {
  return (
    <>
      <Text style={theme.title}>Contacts</Text>

      <TouchableOpacity
        onPress={() => toggleForm()}
        style={{paddingRight: 15, paddingTop: 23}}>
        <Icon name="person-add" type="materialicon" color="skyblue" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => toggle()}
        style={{paddingRight: 20, paddingTop: 22}}>
        <Icon
          name={isDark ? 'flare' : 'brightness-3'}
          type="materialicon"
          color="skyblue"
        />
      </TouchableOpacity>
    </>
  );
};

export default TopBar;
