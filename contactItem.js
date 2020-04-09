import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
  Button,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {callNumber, messageNumber} from './utils';

const ContactItem = ({contact, theme}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          Alert.alert(contact.name, contact.phone + '       ' + contact.email, [
            {
              text: 'Dismiss',
              onPress: () => console.log('Dismissed'),
            },
            {
              text: 'Message',
              onPress: () => messageNumber(contact.phone),
            },
            {text: 'Call', onPress: () => callNumber(contact.phone)},
          ])
        }>
        <View style={theme.contactContainer}>
          <View style={theme.contactSubContainer}>
            <Image
              style={theme.contactAvatar}
              source={{
                uri:
                  'http://placeimg.com/100/100/people4' +
                  (Math.floor(Math.random() * 100) + 1) +
                  '.png',
              }}
              borderRadius={50}
            />
            <View>
              <Text style={theme.contactName}>{contact.name}</Text>
              <Text style={theme.contactNumber}>{contact.phone}</Text>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 10,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignSelf: 'center',
            }}>
            <View
              onPress={() => callNumber(contact.phone)}
              style={{paddingRight: 10}}>
              <Icon name="call" color="green" />
            </View>
            <View>
              <Icon name="textsms" color="skyblue" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ContactItem;
