import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {
  ErrorPage,
  HomePage,
  LoginPage,
  PokerPage,
  SignUpPage,
<<<<<<< HEAD
} from "../pages/main_pages";
import { Toast } from "../components/UI";
=======
  GamesPage,
} from '../pages/main_pages';
import { GameListPage } from '../pages/second_pages';
import { Toast } from '../components/UI';
>>>>>>> 6b1e521fb12fd570777996d78e2a42da16b63e77

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <>
        <Toast />
        <App />
      </>
    ),
    children: [
<<<<<<< HEAD
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/rooms-poker",
        element: <PokerPage />,
=======
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
>>>>>>> 6b1e521fb12fd570777996d78e2a42da16b63e77
      },
    ],
  },
]);

export default router;
