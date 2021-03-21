import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import Search from '../components/CustomInput';
import ListContact from '../components/CardContact';
import {connect} from 'react-redux';

class SearchReceiver extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Search icon1="search" icon2="sort-amount-desc" />
        <Text style={styles.title}>Contacts</Text>
        <Text style={styles.count}>{`${123} Contact Founds`}</Text>
        <FlatList
          data={this.props.contact.history}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => {
            return <ListContact id={item.id} name={item.name} />;
          }}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#514F5B',
    marginLeft: 16,
    marginTop: 40,
  },
  count: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#8F8F8F',
    marginLeft: 16,
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  contact: state.transaction,
});

export default connect(mapStateToProps)(SearchReceiver);
