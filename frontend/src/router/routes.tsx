import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../components/Layouts/DefaultLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
    },
]);

export default router;
