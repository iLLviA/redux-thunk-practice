import * as React from 'react'
import Todo from './Todo'

interface Props {
    todos: {
        id: number,
        text: string,
        completed: boolean
    }[],
    toggleTodo: (id: number) => void;
}

const TodoList = (props: Props) => (
    <ul>
        {props.todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onClick={() => { props.toggleTodo(todo.id)}}
                ></Todo>
            )
        })}
    </ul>
)

export default TodoList;