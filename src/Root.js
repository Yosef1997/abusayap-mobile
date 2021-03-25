import React, {useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import io from './helpers/socket';
import jwtdecode from 'jwt-decode';
import {getUserDetail} from './redux/actions/auth';

export default function Root(props) {
  const dispatch = useDispatch();
  const token = useSelector(c => c.auth.token);

  useEffect(() => {
    if (token) {
      const decode = jwtdecode(token);
      // console.log('====== ID =====', decode.id)
      io.on(`Receive_Transaction_${decode.id}`, msg => {
        console.log(msg);
        console.log('====== ID =====', decode.id);

        dispatch(getUserDetail(token, decode.id));
      });

      io.once(`Update_Top_Up_${decode.id}`, msg => {
        console.log(msg);
        dispatch(getUserDetail(token), decode.id);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Fragment>{props.children}</Fragment>;
}
