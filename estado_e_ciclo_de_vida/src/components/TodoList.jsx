import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTodo=() => {
        setTodos([...todos, {
            id: Math.random(),
            task: task,   
        }]);

        setTask('');
    }

    return (
        <div>
            <input
                type="text"
                value={task}
                placeholder="Digite sua tarefa..."
                onChange={(event) => setTask(event.target.value)}
            />

           <button onClick={addTodo}>Adicionar</button>
        
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>{ todo.task}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;