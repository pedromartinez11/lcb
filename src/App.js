import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Card from './components/Card/Card';
import SaveButton from './components/SaveButton/SaveButton';
import initStore from './store/initStore';
import { selectCell } from './store/actions/configActions';
import CardContainer from './containers/CardContainer';

const store = initStore ();

// todo - remove debug code
setTimeout(() => {
	console.log('dispatched an action');
	const action = selectCell(2, 52);
	store.dispatch(action);
}, 2000);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to lcb</h1>
          </header>
          <Card />
          <SaveButton />
					<CardContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
