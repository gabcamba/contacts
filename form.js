// Formik x React Native example
import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';

const Form = props => (
  <Formik initialValues={{email: ''}} onSubmit={values => props.addNew(values)}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
      <View style={{margin: 25}}>
        <TextInput
          style={{
            marginBottom: 25,
            height: 40,
            borderBottomColor: 'powderblue',
            borderBottomWidth: 1,
          }}
          placeholder="Name"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
        />
        <TextInput
          style={{
            marginBottom: 25,
            height: 40,
            borderBottomColor: 'powderblue',
            borderBottomWidth: 1,
          }}
          placeholder="Phone Number"
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
        />
        <TextInput
          style={{
            marginBottom: 25,
            height: 40,
            borderBottomColor: 'powderblue',
            borderBottomWidth: 1,
          }}
          placeholder="Email Address"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Button color='green' onPress={handleSubmit} title="Save" />
      </View>
    )}
  </Formik>
);

export default Form;
