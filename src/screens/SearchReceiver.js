import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Search from '../components/CustomInput';
import ListContact from '../components/CardContact';
import {connect} from 'react-redux';
import {newDataContactFlatList} from '../redux/actions/transaction';
import http from '../helpers/http';
import LoadMore from '../components/LoadMore';

class SearchReceiver extends Component {
  state = {
    listRefresh: false,
    nextLink: '',
  };

  fetchNewData = async () => {
    try {
      this.setState({listRefresh: true});
      const oldData = this.props.contact.listContact;
      const response = await http(this.props.auth.token).get(
        `${this.props.contact.pageInfoContact.nextLink}`,
      );
      const resultResponse = response.data.results;
      const newData = [...oldData, ...resultResponse];
      this.props.newDataContactFlatList(newData, response.data.pageInfo);
      this.setState({listRefresh: false});
    } catch (err) {
      console.log(err.response.data.message);
      this.setState({listRefresh: false});
    }
  };

  nextData = async () => {
    try {
      const oldData = this.props.contact.listContact;
      const response = await http(this.props.auth.token).get(
        `${this.props.contact.pageInfoContact.nextLink}`,
      );
      const resultResponse = response.data.results;
      const newData = [...oldData, ...resultResponse];
      this.props.newDataContactFlatList(newData, response.data.pageInfo);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Search icon1="search" icon2="sort-amount-desc" />
          <Text style={styles.title}>Contacts</Text>
          <Text
            style={
              styles.count
            }>{`${this.props.contact.listContact.length} Contact Founds`}</Text>
        </View>
        <View style={styles.wrapperFlatList}>
          {this.props.contact.isLoading === true ? (
            <ActivityIndicator
              size="large"
              color="black"
              style={styles.loading}
            />
          ) : (
            <FlatList
              data={this.props.contact.listContact}
              keyExtractor={(item, index) => String(index)}
              renderItem={({item}) => {
                return (
                  <ListContact
                    id={item.id}
                    name={item.name}
                    picture={item.picture}
                    email={item.email}
                    phoneNumber={item.phoneNumber}
                  />
                );
              }}
              refreshing={this.state.listRefresh}
              onRefresh={this.fetchNewData}
              onEndReached={this.nextData}
              onEndReachedThreshold={1}
              ListFooterComponent={<LoadMore nextLink={null} />}
            />
          )}
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  wrapperFlatList: {
    paddingHorizontal: 10,
  },
  loading: {
    marginTop: 30,
  },
  container: {
    backgroundColor: '#fafcff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#514F5B',
    marginLeft: 16,
    marginTop: 15,
  },
  count: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#8F8F8F',
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 10,
  },
});

const mapStateToProps = state => ({
  contact: state.transaction,
  auth: state.auth,
});
const mapDispatchToProps = {newDataContactFlatList};
export default connect(mapStateToProps, mapDispatchToProps)(SearchReceiver);
