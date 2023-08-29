import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { authActions } from './redux/features/authSlice';
import { apiURL } from './assets';
import { Header } from './components/main_components';
import { showToast } from './utils';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, user } = useSelector(({ auth }) => auth);
  console.log(isAuth);
  console.log(user);

  // Verify if user is authenticated in local storage
  useEffect(() => {
    // if token we implement auth.user
    const getUser = async (token) => {
      try {
        const {
          data: { data },
        } = await axios.get(`${apiURL}/users/connect`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        dispatch(authActions.login({ token, user: data.user }));
      } catch (err) {
        console.log(err);
        showToast(
          'error',
          'Votre session a expiré, veuillez vous reconnecter.'
        );
        navigate('/');
      }
    };

    const token = localStorage.getItem('casino-royal-token');
    if (token) getUser(token);
    else console.log('No Token');
  }, [dispatch, navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
