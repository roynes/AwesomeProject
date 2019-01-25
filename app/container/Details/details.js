import React from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import styles from './styles';

class Details extends React.Component {
  static navigationOptions = {
    title: "Deez Details",
  }

  state = {
    imgHeight: 0,
    imgWidth: 0,
  };

  render() {
    // Image.getSize('http://placeimg.com/1024/200/any', (w, h) => {
    //   this.setState({
    //     imgHeight: h,
    //     imgWidth: w,
    //   });
    // });

    return (
      <View style={ styles.container }>
        <View
          style={{
            flex: 1,
          }}
        >
          <Image
            source={{
              uri: 'http://placeimg.com/640/480/any',
            }}
            style={{
              height: '100%',
              width: '100%',
            }}  
            resizeMethod='scale'
            resizeMode='stretch'
          ></Image>
        </View>
        
        <View style={{
          height: 100,
          width: Dimensions.get('window').width,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'white',
        }}>
          <View style={{
            height: 80,
            elevation: 30,
            width: '50%',
            borderColor: '#a1a1a1',
            // backgroundColor: '#fcfcfc',
            borderWidth: 1,

            shadowColor: 'black',
            shadowOpacity: 1  ,
            shadowOffset: { height: 0, width: 0 }
          }}>

            {/* <Image
              source={{
                uri: 'http://placeimg.com/640/480/any',
              }}
              style={{
                height: '100%',
                width: '100%',
              }}
            ></Image> */}

            <ScrollView
              onLayout={event => {
                this.setState({
                  imgWidth: event.nativeEvent.layout.width,
                  imgHeight: event.nativeEvent.layout.height,
                });
              }}
              horizontal
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'red',
                flexDirection: 'row'
              }}
            >
              <Image
                source={{
                  uri: 'http://placeimg.com/720/200/any',
                }}
                style={{
                  height: this.state.imgHeight,
                  width: this.state.imgWidth,
                }}
                // resizeMethod='resize'
                // resizeMode="stretch"
              ></Image>
              <Image
                source={{
                  uri: 'http://placeimg.com/720/200/any',
                }}
                style={{
                  height: this.state.imgHeight,
                  width: this.state.imgWidth,
                }}
                resizeMethod='scale'
                resizeMode='stretch'
              ></Image>
            </ScrollView>

            {/* <ScrollView
              horizontal
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'fcfcff',
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image
                  source={{
                    uri: 'http://placeimg.com/640/480/any',
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                ></Image>
              </View>
            </ScrollView> */}

          </View>
        </View>
      </View>
    );
  }
};

export default Details;