import React, { useState } from 'react';

const DynamicList = () => {
    const [items, setItems] = useState([
        { id: 1, content: '1번', desc: '원래1번입니다' },
        { id: 2, content: '2번', desc: '원래2번입니다' },
        { id: 3, content: '3번', desc: '원래3번입니다' },
    ]);

    const handleDelete = (id) => {
        const updatedItems = items
            .filter((item) => item.id !== id)
            .map((item, index) => ({
                ...item,
                id: index + 1,
                content: `${index + 1}번`, // 내용(content)도 업데이트
            }));
        //{ ...item, desc: value }와 같은 코드는 기존 객체의 속성들을 모두 복사한 뒤, 그 뒤에 새로운 속성 desc를 추가하거나 이미 desc가 존재한다면 해당 값을 업데이트합니다.
        //즉, 기존 객체에 특정 키가 존재하면 해당 키의 값을 업데이트하고, 존재하지 않으면 새로운 키와 값을 추가하는 방식으로 동작
        setItems(updatedItems);
    };

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.content}:{item.desc}
                    <button onClick={() => handleDelete(item.id)}>삭제</button>
                </li>
            ))}
        </ul>
    );
};

export default DynamicList;
