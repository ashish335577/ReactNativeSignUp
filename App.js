import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from './src/components/Wizard';
import Input from './src/components/Input';
const forms2 = [
  {
    placeholder: 'Username here...',
    name: 'log_username',
  },
  {
    placeholder: 'Password here...',
    name: 'log_password',
  },
];
const forms = [
  {
    placeholder: 'Email here...',
    name: 'email',
  },
  {
    placeholder: 'Name here...',
    name: 'name',
  },
  {
    placeholder: 'Mobile here...',
    name: 'mobile',
  },
  {
    placeholder: 'Password here...',
    name: 'password',
  },
  {
    placeholder: 'Confirm-Password here...',
    name: 'confirm_password',
  },
  {
    placeholder: 'Password here...',
    name: 'log_password',
  }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        
        <Wizard
          initialValues={{
            email: '',
            name: '',
            mobile: '',
            password:'',
            confirm_password:'',
            log_password:''
          }}
        >
          {forms.map(el => (
            <Wizard.Step key={el.name}>
              {({ onChangeValue, values }) => (
                <View style={styles.container}>
                  
                  {el.name==='password' || el.name==='confirm_password'||el.name==='log_password'?(
                          <Input
                            secureTextEntry
                            onChangeValue={onChangeValue}
                            placeholder={el.placeholder}
                            value={values[el.name]}
                            name={el.name}
                          />
                        // <Text style={{color: 'blue'}}
                        //       onPress={() => Linking.openURL('http://google.com')}>
                        //   Forget Password
                        // </Text>
                  ):(
                        
                          <Input
                            onChangeValue={onChangeValue}
                            placeholder={el.placeholder}
                            value={values[el.name]}
                            name={el.name}
                          />
                        
                  )}
                </View>
              )}
            </Wizard.Step>
          ))}
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});