import * as React from 'react'
import AddTodo from '../../container/AddTodo'
import Footer from '../../componetns/Fotter'
import VisibleTodoList from '../../container/VisibleTodoList';

const TodoList:React.FC = () => (
    <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
    </div>
)

export default TodoList