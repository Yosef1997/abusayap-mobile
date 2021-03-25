import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import io from './helpers/socket';
import {getUserDetail} from './redux/actions/auth';
import {
  newHistoryTransaction,
  historyTransaction,
} from './redux/actions/transaction';

class Root extends React.Component {
  componentDidMount() {
    io.onAny(() => {
      if (this.props.auth.token) {
        const {
          token,
          user: {id},
        } = this.props.auth;
        io.once(`Receive_Transaction_${id}`, async msg => {
          await this.props.getUserDetail(token, id);
          await this.props.historyTransaction(this.props.auth.token);
        });
        io.once(`Update_Top_Up_${id}`, msg => {
          this.props.getUserDetail(this.props.auth.token, id);
        });
      }
    });
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

const mapStateToProps = states => ({
  auth: states.auth,
});

const mapDispatchToProps = {
  getUserDetail,
  historyTransaction,
  newHistoryTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
