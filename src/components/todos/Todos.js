import {getTodos} from "../../services/todos.services/todos.api";
import {useEffect, useState} from "react";
import Todo from "./Todo";
export default function Todos() {
    let [todos, setTodos] = useState([])

    useEffect(() => {
    getTodos().then(value => setTodos(value))
    });
    return (
        <div>
            {todos
                .map((todo, index) => (<Todo
                item={todo}
                key={index}/>))}
        </div>
    );
}