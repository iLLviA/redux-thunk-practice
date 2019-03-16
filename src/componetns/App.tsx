import * as React from 'react'
import AddTodo from '../container/AddTodo'
import Footer from '../componetns/Fotter'
import VisibleTodoList from '../container/VisibleTodoList';

const App: React.SFC = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
}

export default App