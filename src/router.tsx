import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Board from './components/Board';
import NotFound from './components/NotFound';
import DynamicList from './components/test';

const basePath = process.env.PUBLIC_URL;

// 라우터 생성
const router = createBrowserRouter(
    [
        {
            path: '',
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
                {
                    path: 'test',
                    element: <DynamicList />,
                },
            ],
            errorElement: <NotFound />,
        },
    ],
    {
        // BrowserRouter에 basename 설정
        basename: basePath,
    }
);

export default router;
