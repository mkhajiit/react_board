import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Board from './components/Board';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'board',
                element: <Board />,
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;
