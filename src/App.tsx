import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
    const headerArgs = {
        color: 'info', // 예: Navbar의 색상을 커스터마이징
        expand: 'md', // 예: Navbar의 확장 브레이크포인트 설정
        // ... 다른 원하는 속성들
    };
    return (
        <div>
            {/* JSX에서 {...}를 사용하면 해당 객체의 속성이 개별적인 속성으로 확장되어 전달됩니다. 이는 React 컴포넌트에 한 번에 여러 속성을 전달하거나, 객체의 일부 속성을 전달할 때 유용하게 사용됩니다.  */}
            <Header {...headerArgs} />
            <Outlet />
        </div>
    );
}

export default App;
