import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Fonts from '../../themers/Fonts';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import ImageDemo from '../../../assets/images/imagedemo.jpg';
import Logo from '../../../assets/images/logo.png';
import Service from './detail_child/Service';
import Information from './detail_child/Information';
import Comment from './detail_child/Comment';
import LinearGradient from 'react-native-linear-gradient';

import ScrollableTabView from 'rn-collapsing-tab-bar';
const {width, height} = Dimensions.get('window');

export default class Detail extends React.Component {
  backMainScreen = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  render() {
    let star = [];
    for (let i = 0; i < 5; i++) {
      star.push(<Icon name="star" size={20} color="white" />);
    }
    for (let i = 0; i < 5 - 5; i++) {
      star.push(<Icon name="star" size={20} color="#c3c1c1" />);
    }

    return (
      <View style={{flex: 1, backgroundColor: '#F99A7C'}}>
        <View
          style={{
            // padding: 10,
            flexDirection: 'row',
            height: height / 3,
          }}>
          <ImageBackground
            source={ImageDemo}
            style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
            <View
              style={{
                flex: 1,
                padding: 10,
                margin: 10,
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 50,
                alignItems: 'center',
                maxHeight: 45,
                maxWidth: 45,
              }}>
              <Icon
                name="chevron-left"
                size={25}
                color="black"
                onPress={() => this.backMainScreen()}
              />
            </View>

            <View
              style={{
                flex: 1,
              }}
            />
          </ImageBackground>
        </View>

        <ScrollView style={{marginTop: -30}}>
          <LinearGradient
            colors={['#f75799', '#F99A7C', '#F99A7C', '#F99A7C']}
            style={{
              flex: 1,
              backgroundColor: 'red',
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
              paddingVertical: 20,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 30,
                  color: 'black',
                  fontFamily: Fonts.serif,
                }}>
                Ngoc Mai Nail
              </Text>
              <View style={{flexDirection: 'row'}}>{star}</View>
            </View>

            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Entypo
                  name="location-pin"
                  size={25}
                  color="white"
                  onPress={() => this.backMainScreen()}
                />
                <Text
                  style={{
                    marginHorizontal: 20,
                    fontSize: 20,
                    color: 'black',
                    fontFamily: Fonts.serif,
                  }}>
                  101B-22 Le Huu Trac, Da Nang
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Entypo
                  name="back-in-time"
                  size={20}
                  color="white"
                  onPress={() => this.backMainScreen()}
                />
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 20,
                    color: 'black',
                    fontFamily: Fonts.serif,
                  }}>
                  8:00 - 20:00
                </Text>
              </View>
            </View>

            <View style={styles.tabbar}>
              <ScrollableTabView
                initialPage={0}
                tabBarActiveTextColor="white"
                tabBarUnderlineStyle="white"
                tabBarInactiveTextColor="black"
                tabBarTextStyle={{fontFamily: 'Roboto', fontSize: 20}}
                borderRadius="20">
                <Service tabLabel="Dịch vụ" props={this.props} />
                <Comment tabLabel=" Bình luận" props={this.props} />
                <Information tabLabel="Thông tin" props={this.props} />
              </ScrollableTabView>
            </View>
          </LinearGradient>
        </ScrollView>

        <SafeAreaView>
          <View
            style={{
              marginHorizontal: 10,
              padding: 10,
              flexDirection: 'row',
              backgroundColor: '#F99A7C',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Tổng cộng: 40.000 đ
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableWithoutFeedback onPress={this.onSignin}>
                <Text
                  style={{
                    borderRadius: 20,
                    fontSize: 15,
                    fontWeight: 'bold',
                    padding: 12,
                    paddingHorizontal: 30,
                    textAlign: 'center',
                    backgroundColor: '#FCB1B6',
                    color: 'black',
                  }}>
                  Đặt ngay
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 20,
  },

  tabbar: {
    flex: 1,
    // marginTop: width * 0.1,
    paddingHorizontal: 10,
  },
});
