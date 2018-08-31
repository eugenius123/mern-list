import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoList from './components/TodoList';

import AppNavbar from './components/AppNavbar';

import {Provider} from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
		<Provider store={store}>
	      <div className="App">
	        <AppNavbar/>
	        <TodoList/>
	      </div>

	  </Provider>
    );
  }
}
export default App;
