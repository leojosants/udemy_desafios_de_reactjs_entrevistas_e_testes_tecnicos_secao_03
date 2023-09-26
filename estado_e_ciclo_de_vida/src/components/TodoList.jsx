import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [filter, setFilter] = useState('');

    const addTodo = () => {
        setTodos([...todos, {
            id: Math.random(),
            task: task,
        }]);

        setTask('');
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                placeholder="Digite sua tarefa..."
                onChange={(event) => setTask(event.target.value)}
                />

            <div>
                <button onClick={addTodo}>Adicionar</button>
            </div>

            <h2>5- Filtro</h2>
            <div>
                 <input
                    type="text"
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    placeholder="Digite sua busca..."
                />
           </div>
            
            <ul>
                {
                    todos
                        .filter((todo) => todo.task.includes(filter))
                        .map((todo) => <li key={todo.id}>{todo.task}</li>)
                }
            </ul>
        </div>
    );
};

export default TodoList;