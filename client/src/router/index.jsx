import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {
  ErrorPage,
  HomePage,
  LoginPage,
  PokerPage,
  SignUpPage,
} from "../pages/main_pages";
import { Toast } from "../components/UI";

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
      },
    ],
  },
]);

export default router;
