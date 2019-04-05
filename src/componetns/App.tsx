import * as React from 'react'
import TodoList from './pages/TodoList'
import SearchHotels from './pages/SearchHotels'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


class App extends React.Component {
    render(){
        return(
            <Router>
              <div>
                <ul className="navigation">
                    <li><Link to="/">TodoList</Link></li>
                    <li><Link to="/hotels">SearchHotels</Link></li>
                </ul>
              </div>
             <Switch>
               <Route exact path="/" component={TodoList}/>
               <Route  path="/hotels" component={SearchHotels}/>
             </Switch>  
            </Router>
        )
    }
}

export default App