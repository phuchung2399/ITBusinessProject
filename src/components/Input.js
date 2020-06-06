import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  getData = value => {
    this.props.getData(value);
  };

  render() {
    const {error} = this.props;
    return (
      <View style={style.styleView}>
        {/* <Text style={style.styleTitle}>{this.props.title}</Text> */}
        <TextInput
          style={style.styleTextInput}
          {...this.props}
          value={this.state.value}
          onChangeText={text => this.getData(text)}
          x
        />
        <Text style={style.styleError}>{error}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleTextInput: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#e511e8',
  },
  styleTitle: {
    fontSize: 19,
    color: 'black',
  },
  styleView: {
    padding: 2,
  },
  styleError: {
    fontSize: 15,
    color: 'red',
  },
});

export default Input;
