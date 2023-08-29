import { Outlet } from "react-router-dom";

import { Header } from "./components/main_components";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
