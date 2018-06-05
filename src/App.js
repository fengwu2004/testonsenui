import React, { Component } from 'react';
import './App.css';
import { Page, Toolbar, Button, Switch } from 'react-onsenui'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Button>What Up!</Button>
				<Switch/>
      </div>
    );
  }
}

export default App;
