import { useState } from 'react';
import { Button } from 'reactstrap';

interface ToDosInter {
    id: number;
    goal: string;
    desc: string;
}

function Board() {
    const [toDo, setToDo] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [toDos, setToDos] = useState<ToDosInter[]>([]);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setToDo((current) => (current = event.target.value));
    const onChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
        setDesc((current) => (current = event.target.value));
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo === '' && desc === '') {
            return;
        }
        setToDos((currentObj: ToDosInter[]) => {
            return (currentObj = [...currentObj, { id: toDos.length, goal: toDo, desc: desc }]);
        });
        setToDo('');
    };
    const deleteToDos = (itemId: number) => {
        setToDos((currentToDos) => currentToDos.filter((item) => item.id !== itemId));
    };
    const reviseToDos = (itemId: number) => {
        const reviseValue = prompt('수정할 제목을 입력하세요:') || '';
        const reviseDesc = prompt('수정할 내용을 입력하세요:') || '';
        setToDos((currentToDos) =>
            currentToDos.map((item) =>
                item.id === itemId ? { ...item, goal: reviseValue, desc: reviseDesc } : item
            )
        );
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '10px',
            }}
        >
            <h1>TODOLIST </h1>
            <form onSubmit={onSubmit}>
                <label htmlFor='goal' style={{ marginRight: '5px' }}>
                    제목:{' '}
                </label>
                <input
                    id='goal'
                    onChange={onChange}
                    value={toDo}
                    type='text'
                    placeholder='하고 싶은 일을 적어보자...'
                ></input>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: '10px',
                    }}
                >
                    <label htmlFor='desc' style={{ marginRight: '5px' }}>
                        내용:{' '}
                    </label>
                    <textarea
                        id='desc'
                        value={desc}
                        onChange={onChangeDesc}
                        placeholder='자세한 목표를 설명해보자...'
                        rows={10}
                        cols={100}
                    ></textarea>
                </div>
                <br></br>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginBottom: '10px',
                    }}
                >
                    <button>Add To Do</button>
                </div>
            </form>
            <hr></hr>
            <ul>
                {toDos.map((item) => {
                    return (
                        //onClick 이벤트 핸들러에 함수를 전달할 때, 해당 함수가 인자를 받아야 하는 경우에는 익명 함수를 사용하여 인자를 전달하는 것이 일반적
                        <li key={item.id}>
                            {item.goal} : {item.desc}
                            <Button color='primary' onClick={() => reviseToDos(item.id)}>
                                수정
                            </Button>
                            <Button color='danger' onClick={() => deleteToDos(item.id)}>
                                삭제
                            </Button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Board;
