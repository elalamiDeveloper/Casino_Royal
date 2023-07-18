import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { ErrorPage, HomePage } from '../pages/main_pages';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [{ path: '/', element: <HomePage /> }],
  },
]);

export default router;
