import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleNavigate = useCallback(() => {
        // navigate 함수를 사용하여 "/board"로 이동
        navigate('/board');
    }, [navigate]);

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleNavigate}>Go to Board</button>
        </div>
    );
}

export default Home;
