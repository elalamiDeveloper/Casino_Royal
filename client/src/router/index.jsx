import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {
  ErrorPage,
  HomePage,
  LoginPage,
  SignUpPage,
  GamesPage,
} from "../pages/main_pages";
import {
  GameListPage,
  PokerPage,
  PokerRoomsPage,
  RouletteRoomsPage,
} from "../pages/second_pages";
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
        path: "games",
        element: <GamesPage />,
      },
      {
        path: "games/list",
        element: <GameListPage />,
      },
      {
        path: "games/poker/table",
        element: <PokerPage />,
      },
      {
        path: "games/poker/list",
        element: <PokerRoomsPage />,
      },
      {
        path: "games/roulette/list",
        element: <RouletteRoomsPage />,
      },
    ],
  },
]);

export default router;
