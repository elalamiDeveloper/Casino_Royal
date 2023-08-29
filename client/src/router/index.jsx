import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import {
  ErrorPage,
  HomePage,
  LoginPage,
  SignUpPage,
  GamesPage,
} from '../pages/main_pages';
import { GameListPage } from '../pages/second_pages';
import { Toast } from '../components/UI';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <>
        <Toast />
        <App />
      </>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      {
        path: 'games',
        element: <GamesPage />,
      },
      {
        path: 'games/list',
        element: <GameListPage />,
      },
    ],
  },
]);

export default router;
