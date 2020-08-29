import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Modal,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SideBar from './components/sidebar';
import LinearGradient from 'react-native-linear-gradient';
import Profile from '../../../assets/images/profile.png';
import {connect} from 'react-redux';
import {logOut} from '../../redux/userRedux/action';
import {onSignIn} from '../../navigation';
import {storageGet, removeItemValue} from '../../checkAsyncStorage';
import AwesomeAlert from 'react-native-awesome-alerts';
import Fonts from '../../themers/Fonts';
import {t} from '../../i18n/t';

class SideBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      token: '',
      isShowInfor: false,
      showAlert: false,
      modalVisible: false,
    };
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  onClickPerInfor = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'PersonalInfor',

              options: {
                topBar: {
                  title: {
                    text: '',
                    alignment: 'center',
                  },
                  visible: false,
                },
              },
            },
          },
        ],
      },
    });
  };

  onClose = () => {
    Navigation.mergeOptions('sideMenu', {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
  };

  changeProfileScreen = () => {
    Navigation.showModal({
      component: {
        name: 'Profile',
      },
    });
  };

  onSignOut = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  onVerify = async () => {
    let token = this.state.token;
    this.props.onLogOutUser(token);
    this.removeUser();
    // onSignIn();
  };

  componentDidMount() {
    this.onCheckUserSignedIn();
  }

  removeUser = async () => {
    try {
      await removeItemValue('user');
    } catch (e) {
      console.log('Logout failed', e);
    }
  };

  onCheckUserSignedIn = async () => {
    try {
      let getUserAccount = await storageGet('user');
      let parsedUser = JSON.parse(getUserAccount);
      if (parsedUser) {
        this.setState({
          user: parsedUser.data.user,
          token: parsedUser.data.token,
        });
      }
    } catch (error) {
      // alert(error);
    }
  };

  onVoucher = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'Voucher',

              options: {
                topBar: {
                  title: {
                    text: '',
                    alignment: 'center',
                  },
                  visible: false,
                },
              },
            },
          },
        ],
      },
    });
  };

  onContactApp = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'Contact',

              options: {
                topBar: {
                  title: {
                    text: '',
                    alignment: 'center',
                  },
                  visible: false,
                },
              },
            },
          },
        ],
      },
    });
  };

  onBooking = () => {
    alert('bk');
  };

  onVoucherUnike = () => {
    alert('uddq');
  };

  render() {
    const userInfor = this.state.user;

    return (
      <View style={{flex: 1, backgroundColor: '#F99A7C'}}>
        <LinearGradient colors={['#FC5895', '#F99A7C']}>
          <SafeAreaView
            style={{
              paddingTop: 10,
              marginHorizontal: 15,
              marginBottom: 10,
            }}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => this.onPress()}>
                <Icon
                  name="close"
                  size={30}
                  color="white"
                  onPress={() => this.onClose()}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.changeProfileScreen()}>
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      borderWidth: 1,
                      borderColor: '#FFF',
                      borderRadius: 60,
                    }}
                    source={{uri: userInfor.avatar}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 2}}>
                <TouchableOpacity onPress={() => this.changeProfileScreen()}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      marginVertical: 8,
                      color: 'white',
                      fontFamily: Fonts.serif,
                    }}>
                    {userInfor.user_name}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>

        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 5,
            paddingVertical: 25,
            backgroundColor: 'white',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              height: 50,
              marginHorizontal: 20,
              alignItems: 'center',
              borderBottomColor: '#b3acac',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Icon name="switcher" size={22} color="#4290ea" />
            </View>
            <View style={{flex: 5, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => this.onVoucher()}>
                <Text
                  style={{
                    fontFamily: Fonts.serif,
                    fontSize: 18,
                  }}>
                  Ưu đãi
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              height: 50,
              marginHorizontal: 20,
              alignItems: 'center',
              borderBottomColor: '#b3acac',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Icon name="form" size={22} color="#4290ea" />
            </View>
            <View style={{flex: 5, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => this.onBooking()}>
                <Text
                  style={{
                    fontFamily: Fonts.serif,
                    fontSize: 18,
                  }}>
                  Book ngay
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              height: 70,
              marginHorizontal: 20,
              alignItems: 'center',
              borderBottomColor: '#b3acac',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Icon name="alipay-circle" size={22} color="#4290ea" />
            </View>
            <View style={{flex: 5, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => this.onVoucherUnike()}>
                <Text
                  style={{
                    fontFamily: Fonts.serif,
                    fontSize: 18,
                  }}>
                  Ưu đãi độc quyền
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              height: 50,
              marginHorizontal: 20,
              alignItems: 'center',
              borderBottomColor: '#b3acac',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Feather name="phone-call" size={22} color="#4290ea" />
            </View>
            <View style={{flex: 5, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => this.onContactApp()}>
                <Text
                  style={{
                    fontFamily: Fonts.serif,
                    fontSize: 18,
                  }}>
                  Liên hệ với The Nail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: '#f0f0f3'}}>
          <View style={{flexDirection: 'row', marginHorizontal: 15}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Icon
                name="setting"
                size={25}
                color="#4290ea"
                onPress={() => this.onSignOut()}
              />
              <TouchableWithoutFeedback onPress={this.onSignOut}>
                <Text
                  style={{
                    fontSize: 15,
                    padding: 15,
                    textAlign: 'center',
                    color: '#4c4c4e',
                  }}>
                  Cài đặt
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex: 1}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Icon
                name="logout"
                size={20}
                color="#4290ea"
                onPress={() => this.onSignOut()}
              />
              <TouchableWithoutFeedback onPress={this.onSignOut}>
                <Text
                  style={{
                    fontSize: 15,
                    padding: 12,
                    textAlign: 'center',
                    color: '#4c4c4e',
                  }}>
                  Đăng xuất
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
              height: 100,
            }}>
            <View
              style={{
                margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 35,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                width: 300,
                height: 200,
              }}>
              <Text
                style={{
                  marginBottom: 18,
                  flex: 1,
                  textAlign: 'center',
                  fontSize: 16,
                  color: '#797777',
                }}>
                {t('confirm_text_singout')}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                  style={{
                    backgroundColor: '#F194FF',
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 100,
                    marginHorizontal: 20,
                  }}
                  onPress={() => {
                    this.setState({
                      modalVisible: !this.state.modalVisible,
                    });
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Quay lại
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={{
                    backgroundColor: '#2196F3',
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 100,
                    marginHorizontal: 20,
                  }}
                  onPress={() => {
                    this.onVerify();
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Đăng xuất
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 25,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 25,
  },
  titleOption: {
    fontSize: 20,
    marginTop: 4,
    marginVertical: 17,
    color: 'gray',
  },

  back: {
    flex: 1,
    justifyContent: 'center',
  },

  styleViewProfile: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  styleImageProfile: {
    borderRadius: 150,
    width: 200,
    height: 200,
  },
  viewRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: '#b3acac',
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogOutUser: token => {
      dispatch(logOut(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);
