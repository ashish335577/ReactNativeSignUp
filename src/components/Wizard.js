import React, { PureComponent } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';
import Step from './Step';

class Wizard extends PureComponent {
  static Step = Step;

  state = {
    index: 0,
    x:false,

    values: {
      ...this.props.initialValues,
    },
  };

  _nextStep = () => {
    if (this.state.index !== this.props.children.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }));
    }
  };

  _prevStep = () => {
    if (this.state.index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }));
    }
  };
  _lastStep = () => {
    if (this.state.index === 0) {
      this.setState(prevState => ({
        index: prevState.index + 5,
        x:true
      }));
    }
  };
  _logPreStep = () => {
    if (this.state.index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 5,
        x:false
      }));
    }
  };
  _onChangeValue = (name, value) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  _onSubmit = () => {
    let d=this.state.values;
    axios.post('https://jazzypay.ph/api/register', 
      {
        name: d.name,
        email: d.email,
        mobile_number: d.mobile,
        password: d.password,
        confirm_password: d.confirm_password
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(function (response) {
      console.log('response data',response);
      Alert.alert(response.data.message);
    })
    .catch(function (error) {
      console.log("inside catch");
      console.log(error.response.data.message);
      Alert.alert(error.response.data.message);
    });
    console.log('console',d);
    console.log('console',d.name);
  };

  _logSubmit = () => {
    let d=this.state.values;
    axios.post('https://jazzypay.ph/api/login', 
      {
        email: d.email,
        password: d.log_password
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(function (response) {
      console.log('response data',response);
      Alert.alert(response.data.message);
    })
    .catch(function (error) {
      console.log("inside catch");
      console.log(error.response.data.message);
      Alert.alert(error.response.data.message);
    });
    console.log('console',d);
    console.log('console',d.name);
  };

  render() {
    console.log('values', this.state);
    return (
      <View style={{ flex: 1 }}>
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextStep: this._nextStep,
              prevStep: this._prevStep,
              lastStep:this._lastStep,
              logPreStep:this._logPreStep,
              isLog: this.state.x,
              isLast: this.state.index === this.props.children.length - 2,
              onChangeValue: this._onChangeValue,
              values: this.state.values,
              onSubmit: this._onSubmit,
              logSubmit: this._logSubmit,
            });
          }
          return null;
        })}
      </View>
    );
  }
}

export default Wizard;