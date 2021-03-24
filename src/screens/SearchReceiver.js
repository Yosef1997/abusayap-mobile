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

class SearchReceiver extends Component {
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
                  />
                );
              }}
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
});

export default connect(mapStateToProps)(SearchReceiver);
