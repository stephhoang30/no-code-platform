import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {
  DefaultLayout,
} from '../layouts';
import {
  HomePage,
  PageNotFound,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '*',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ]
  }
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
}
