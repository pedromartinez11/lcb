import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Card from './components/Card/Card';
import RandomButton from './components/buttons/RandomButton';

import initStore from './store/initStore';
import CardContainer from './containers/CardContainer';

const store = initStore ();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to lcb</h1>
          </header>
          <Card />
          <RandomButton />
          <CardContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
