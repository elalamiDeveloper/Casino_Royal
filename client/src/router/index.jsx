import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { ErrorPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
  },
]);

export default router;
