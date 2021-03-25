import React, {Component} from 'react';
import {
  Text,
  View,
  Alert,
  StatusBar,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CardImg from '../components/UploadProfile';
import ProfilImg from '../assets/images/profile.jpg';
import Card from '../components/CardProfile';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {updateUser, deletePicture} from '../redux/actions/UpdateProfile';
import {REACT_APP_API_URL as API_URL} from '@env';

class Profile extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  addPhotoCamera = async () => {
    this.setState({modalVisible: false});
    launchCamera(
      {
        quality: 0.3,
      },
      async response => {
        if (response.didCancel) {
          Alert.alert('User cancelled upload image');
        } else if (response.errorMessage) {
          Alert.alert('Image Error: ', response.errorMessage);
        } else if (response.fileSize >= 1 * 1024 * 1024) {
          Alert.alert('Image to large');
        } else {
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          console.log(dataImage);
          await this.props.updateUser(
            this.props.auth.token,
            this.props.auth.user.id,
            {picture: dataImage},
          );
          // Alert(this.props.auth.message, 'success');
        }
      },
    );
  };
  addPhotoGallery = async () => {
    this.setState({modalVisible: false});
    launchImageLibrary({}, async response => {
      if (response.didCancel) {
        Alert.alert('User cancelled upload image');
      } else if (response.errorMessage) {
        Alert.alert('Image Error: ', response.errorMessage);
      } else if (response.fileSize >= 1 * 1024 * 1024) {
        Alert.alert('Image to large');
      } else {
        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        await this.props.updateUser(
          this.props.auth.token,
          this.props.auth.user.id,
          {picture: dataImage},
        );
        // Alert(this.props.auth.message, 'success');
      }
    });
  };
  doDeletePicture = async () => {
    await this.props.deletePicture(
      this.props.auth.token,
      this.props.auth.user.id,
    );
    this.setState({modalVisible: false});
  };
  render() {
    const {modalVisible} = this.state;
    const {user} = this.props.auth;
    return (
      <React.Fragment>
        <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
        <ScrollView style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="arrowleft" size={25} color="#000" />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonOpen]}
                  onPress={this.addPhotoCamera}>
                  <Text style={styles.text2Style}>Open camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonOpen]}
                  onPress={this.addPhotoGallery}>
                  <Text style={styles.text2Style}>Open gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={this.doDeletePicture}>
                  <Text style={styles.textStyle}>Delete photo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <CardImg
            source={
              user.picture !== null
                ? {
                    uri: API_URL.concat(`/upload/profile/${user.picture}`),
                  }
                : ProfilImg
            }
            name={`${user.firstname} ${user.lastname}`}
            phone={user.phoneNumber}
            onPress={() => this.setModalVisible(true)}
          />
          <Card
            label="Personal Information"
            name="arrowright"
            onPress={() => this.props.navigation.navigate('PersonalInfo')}
          />
          <Card
            label="Change Password"
            name="arrowright"
            onPress={() => this.props.navigation.navigate('ChangePass')}
          />
          <Card
            label="Change Pin"
            name="arrowright"
            onPress={() => this.props.navigation.navigate('ChangePin')}
          />
          <Card label="Notification" name="arrowright" />
          <Card
            label="Logout"
            name="arrowright"
            onPress={() => this.props.navigation.navigate('Auth')}
          />
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  buttonOpen: {
    backgroundColor: 'white',
  },
  buttonClose: {
    backgroundColor: '#00D16C',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2Style: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser, deletePicture};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
