import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello React!</h1>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));




// class App extends React.Component {
//   constructor(props) { 
//     super(props)
//     this.state = { message: 'something' }
//   }

//   onChange(e) {
//      this.setState( {message: e.target.value} )
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" onChange = { this.onChange.bind(this) } />
//         <p>{ this.state.message }</p>
//       </div>
//     )
//   }
// }

// render(<App/>, document.getElementById('app'))