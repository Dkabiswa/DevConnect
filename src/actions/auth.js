import axios from 'axios';
import setAlert from './alert';
import { REGISTER_SUCESS, REGISTER_FAIL } from './constants';

// Register User
const register = ({
 name, email, password, password2 
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
 name, email, password, password2 
});
  try {
    const res = await axios.post('http://localhost:5000/api/users/register', body, config);
    dispatch({
      type: REGISTER_SUCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.errors);
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    const errors = err.response.data;
    if (errors) {
      Object.values(errors).forEach((er) => dispatch(setAlert(er, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
export default register;
