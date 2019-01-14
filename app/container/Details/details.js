import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Details extends React.Component {
  static navigationOptions = {
    title: "Deez Details",
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>This is my first App</Text>
        <Text>This is its first detail</Text>
      </View>
    );
  }
};

export default Details;