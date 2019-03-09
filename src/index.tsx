import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './componetns/Search'

class App extends React.Component {
  render() {
    return (
        <div>
          <Hello greeting="Hello!" />
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
