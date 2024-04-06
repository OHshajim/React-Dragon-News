import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Root from '../Layouts/Root/Root';
import NewsDetails from '../pages/News/NewsDetails';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SIgnUp/SignUp';
import PrivetRoute from './PrivetRoute';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/news.json')
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <SignUp />,
            },
            {
                path: "/news/:_id",
                element: <PrivetRoute><NewsDetails /></PrivetRoute>,
                loader: () => fetch('/news.json')
            },
        ]
    },
]);

export default Router;