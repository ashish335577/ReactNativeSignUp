import React, { PureComponent } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class Step extends PureComponent {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        {this.props.children({
          onChangeValue: this.props.onChangeValue,
          values: this.props.values,
        })}
        {/* <View style={styles.buttonWrapper}>_lastStep = () => {
    if (this.state.index === 0) {
      this.setState(prevState => ({
        index: prevState.index + 3,
        x:true
      }));
    }
  };
          <Button
            title="Prev"
            disabled={this.props.currentIndex === 0}
            onPress={this.props.prevStep}
          /> */}
          {this.props.currentIndex===0 ? (
           <View style={styles.buttonWrapper}>
            <Button title="Login" onPress={this.props.lastStep} />
            <Button title="SignUp" onPress={this.props.nextStep} />
            </View>
          ) : (
            <View>
              {this.props.isLog ? (
                    <View style={styles.buttonWrapper}>
                    <Button title="Back" onPress={this.props.logPreStep} />
                    <Button title="Submit" onPress={this.props.logSubmit} />
                    </View>
                ) : (
                  <View style={styles.buttonWrapper}>
                  <Button
                  title="Prev"
                  disabled={this.props.currentIndex === 0}
                  onPress={this.props.prevStep}
                  />
                  {this.props.isLast ? (
                      <Button title="Submit" onPress={this.props.onSubmit} />
                  ) : (
                      <Button title="Next" onPress={this.props.nextStep} />
                  )}
                  </View>
                )}
                
            </View>
          )}
          
          {/* {this.props.isLast ? (
            <Button title="Submit" onPress={this.props.onSubmit} />
          ) : (
            <Button title="Next" onPress={this.props.nextStep} />
          )} */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Step;