import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class Hello extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Hello />, document.getElementById(`root`));
