import { View, TouchableNativeFeedback, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import React from 'react';

export default CustomButton = ({onclick, style, bordercolor, bgcolor, text, disable}) => {
  const InnerButton = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={ [style, { width: '100%' }] }>
      <InnerButton
        background={ TouchableNativeFeedback.SelectableBackground() }
        onPress={ onclick }
        disabled={ disable }
      >
        <View 
          style={ [
            styles.textView,
            { backgroundColor: bgcolor || 'white', borderColor: bordercolor || 'white' }
          ] }
        >
          <Text style={ styles.text } disabled={ disable }>{ text }</Text>
        </View>
      </InnerButton>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 12,
    borderStyle: 'solid',
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  }
});