import * as React from 'react'

interface Props {
    text: string,
    completed: boolean,
    onClick: () => void
}

const Todo = (props: Props) => (
    <li 
        onClick={ props.onClick }
        style = {{
            textDecoration: props.completed ? 'line-through' : 'none'
        }}
    >
        {props.text}
    </li>
)

export default Todo