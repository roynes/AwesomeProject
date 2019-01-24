import React from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import styles from './styles';

class Details extends React.Component {
  static navigationOptions = {
    title: "Deez Details",
  }

  render() {
    return (
      <View style={ styles.container }>
        <View
          style={{
            flex: 1,
            margin: 20,
            backgroundColor: 'grey',
            elevation: 1,
            
          }}
        ></View>

        <View style={{
          
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'white',
        }}>
          <View style={{
            height: 50,
            elevation: 30,
            width: Dimensions.get('window').width / 1.5
          }}>
            <ScrollView
              horizontal
              style={{
                width: Dimensions.get('window').width / 1.5,
                flexDirection: "row",
                backgroundColor: 'blue',
                elevation: 1500,
              }}
            >
              <Image
                source={{
                  uri: 'http://placeimg.com/640/480/any',
                }}
                style={{
                  height: 50,
                  width: Dimensions.get('window').width,
                }}
              ></Image>
              <Image
                source={{
                  uri: 'http://placeimg.com/640/480/any',
                }}
                style={{
                  height: 50,
                  width: Dimensions.get('window').width,
                }}
              ></Image>
              <Image
                source={{
                  uri: 'http://placeimg.com/640/480/any',
                }}
                style={{
                  height: 50,
                  width: Dimensions.get('window').width,
                }}
              ></Image>
              <Image
                source={{
                  uri: 'http://placeimg.com/640/480/any',
                }}
                style={{
                  height: 50,
                  width: Dimensions.get('window').width,
                }}
              ></Image>
              <Image
                source={{
                  uri: 'http://placeimg.com/640/480/any',
                }}
                style={{
                  height: 50,
                  width: Dimensions.get('window').width,
                }}
              ></Image>
              <Image
                source={{
                  uri: 'http://placeimg.com/640/480/any',
                }}
                style={{
                  height: 50,
                  width: Dimensions.get('window').width,
                }}
              ></Image>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
};

export default Details;