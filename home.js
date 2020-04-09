import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ToastAndroid,
  Button,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//custom components
import ContactItem from './contactItem';

//styles
import styles from './styles';
import darkMode from './darkMode';
import NavBar from './navBar';

const Home = ({navigation}) => {
  let [contactList, setContactList] = useState([]);
  let [isDarkMode, setDarkMode] = useState(false);
  let [showForm, setShowForm] = useState(false);
  let theme = isDarkMode ? darkMode : styles;

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addNewContact = contact => {
    console.log('from add new');
    let list = [...contactList];
    list.unshift(contact);
    setContactList(list);
    setShowForm(!showForm);
    ToastAndroid.show('Contact Saved!', ToastAndroid.SHORT);
  };

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(contacts => {
        setContactList(contacts.concat(contacts));
      });
  };

  useEffect(getUsers, []);

  return (
    <SafeAreaView style={theme.container}>
      {isDarkMode ? (
        <StatusBar backgroundColor={'#030303'} barStyle="light-content" />
      ) : (
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      )}
      <FlatList
        style={theme.scrollView}
        data={contactList}
        renderItem={({item, index}) => (
          <ContactItem key={index} theme={theme} contact={item} />
        )}
      />
      <Button
        color="green"
        onPress={() => navigation.navigate('Create New')}
        title="Add New contact"
      />
      <View>
        <NavBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
