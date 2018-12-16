import './App.css';
import { store } from './store.js';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Linky from './views/linky'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter >
          <Switch>
            <Route path='/linky' exact component={Linky} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
