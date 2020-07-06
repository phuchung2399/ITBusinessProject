import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Input from '../../components/Input';
import {onSignIn} from '../../navigation';
// import IconLogin from '../../../assets/images/login_image.png';
// import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Logo from '../../../assets/images/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import UploadProfile from './UploadProfile';
import {t} from '../../i18n/t';
const {width, height} = Dimensions.get('window');

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      name: 'huutuan',
      phoneNumber: '0909090909',
      password: 'tuannui123',
      confirmPass: 'tuannui123',
      errorName: '',
      errorPhoneNumber: '',
      errorPassword: '',
      errorConfirmPass: '',
    };
  }

  onRestart = () => {
    this.setState({
      errorName: '',
      errorLastName: '',
      errorEmail: '',
      errorPhoneNumber: '',
      errorPassword: '',
      errorConfirmPass: '',
    });
  };

  onSignin = () => {
    onSignIn();
  };

  onContinued = event => {
    var {name, phoneNumber, password, confirmPass} = this.state;

    this.onRestart();

    if (name === '') {
      this.setState({errorName: 'Enter your name!'});
    } else if (phoneNumber === '') {
      this.setState({errorPhoneNumber: 'Enter phone number!'});
    } else if (isNaN(phoneNumber)) {
      this.setState({errorPhoneNumber: 'Phone number is not valid!'});
    } else if (phoneNumber.length > 10) {
      this.setState({errorPhoneNumber: 'Phone number is not valid!'});
    } else if (phoneNumber.length < 10) {
      this.setState({errorPhoneNumber: 'Phone number is not valid!'});
    } else if (password === '') {
      this.setState({errorPassword: 'Enter password!'});
    } else if (password.length < 8) {
      this.setState({errorPassword: 'Password is not valid!'});
    } else if (password.length > 64) {
      this.setState({errorPassword: 'Password is not valid!'});
    } else if (confirmPass != password) {
      this.setState({errorConfirmPass: 'Password does not match!'});
    } else {
      const data = {
        name: name,
        phoneNumber: phoneNumber,
        password: password,
      };
      // console.log(data);
      this.onChangeUploadScreen(data);
    }
  };

  onChangeUploadScreen = data => {
    Navigation.showModal({
      component: {
        name: 'UploadProfile',
        passProps: {
          data: data,
        },
      },
    });
  };

  getData = (key, value) => {
    this.setState({
      [key]: value,
    });
    console.log(key, value);
  };

  render() {
    var {
      errorName,
      errorPhoneNumber,
      errorPassword,
      errorConfirmPass,
    } = this.state;

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#F99A7C'}}>
        <LinearGradient colors={['#FC5895', '#F99A7C', '#F99A7C']}>
          <SafeAreaView
            style={{
              height: height / 4,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text
                animation="zoomInUp"
                style={{
                  fontSize: 50,
                  fontWeight: 'bold',
                  marginTop: 20,
                  color: 'white',
                }}>
                {t('brand_name')}
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>

        <Animatable.View
          animation="pulse"
          style={{
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 30,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '15%',
              marginBottom: 15,
            }}>
            <Text style={{fontSize: 50, fontWeight: 'bold'}}>
              {t('txtSignUp')}
            </Text>
          </View>

          <Input
            getData={e => this.getData('name', e)}
            title="Tên đăng nhập *"
            placeholder="Tên đăng nhập..."
            error={errorName}
          />
          <Input
            getData={e => this.getData('phoneNumber', e)}
            title="Số điện thoại*"
            placeholder="Nhập số điện thoại..."
            error={errorPhoneNumber}
            keyboardType="numeric"
          />
          <Input
            getData={e => this.getData('password', e)}
            title="Mật khẩu *"
            placeholder="Mật khẩu..."
            error={errorPassword}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
          />
          <Input
            getData={e => this.getData('confirmPass', e)}
            title="Xác nhận mật khẩu *"
            placeholder="Xác nhận mật khẩu ..."
            error={errorConfirmPass}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
          />

          <LinearGradient
            colors={['#e511e8', '#F99A7C']}
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 25,
            }}>
            <TouchableWithoutFeedback onPress={this.onContinued}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                  flex: 1,
                  margin: 7,
                }}>
                Tiếp tục
              </Text>
            </TouchableWithoutFeedback>
          </LinearGradient>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <Icon
              name="angle-left"
              size={40}
              color="blue"
              onPress={() => this.changScreenSearch()}
            />
            <TouchableWithoutFeedback onPress={this.onSignin}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 16,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  marginHorizontal: 12,
                }}>
                Đã có tài khoản
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </Animatable.View>

        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{
            position: 'absolute',
            right: '30%',
            top: '12%',
            overflow: 'hidden',
          }}>
          <Image
            style={{
              width: 170,
              height: 170,
            }}
            source={Logo}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  styleViewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  styleViewText: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 50,
    marginHorizontal: 20,
  },
  styleTextBottom: {
    fontSize: 17,
    color: 'gray',
    textAlign: 'center',
  },
  styleButtonCommit: {
    color: '#2bb6f9',
    fontWeight: 'bold',
    fontSize: 17,
  },
  container: {
    justifyContent: 'center',
    marginTop: 40,
  },
  textBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleSignUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1.5,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'center',
    backgroundColor: '#2bb6f9',
    borderColor: 'blue',
    color: 'white',
    flex: 1,
    margin: 10,
  },
  styleViewImage: {
    flex: 2,
    margin: 3,
  },
  styleImage: {
    width: '100%',
    height: 300,
  },
});

export default SignUp;
