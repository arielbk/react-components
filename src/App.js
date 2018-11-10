import React, { Component } from 'react';
import GithubCorner from './components/GithubCorner';

class App extends Component {
  render() {
    return (
      <div>
        <GithubCorner 
          // url is the only required prop
          url="https://github.com/arielbk/react-components/"
          // other options
          // location="left"
          // fill="red"
          // color="gray"
          // fillHover="purple"
        />
      </div>
    );
  }
}

export default App;
