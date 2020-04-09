import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {MyReactNativeForm} from './form';
//styles
import styles from './styles';
import darkMode from './darkMode';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NavBar = ({navigation, isDarkMode}) => {
  let theme = isDarkMode ? darkMode : styles;
  let feedback = TouchableNativeFeedback.Ripple('green', true);

  return (
    <>
      <View style={theme.mainNav}>
        <View style={theme.subNav}>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('Favorites')}
            background={feedback}>
            <View>
              <Icon name="favorite" color="gray" />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback background={feedback}>
            <View>
              <Icon name="face" color="green" />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('Recents')}
            background={feedback}>
            <View>
              <Icon name="access-time" color="gray" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
};

export default NavBar;
