import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Root from '../Layouts/Root/Root';
import NewsDetails from '../pages/News/NewsDetails';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader:()=>fetch('./news.json')
            },
            {
                path: "/news/:_id",
                element: <NewsDetails/>,
                loader:()=>fetch('./news.json')
            },
        ]
    },
]);

export default Router;