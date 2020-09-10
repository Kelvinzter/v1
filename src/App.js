import React, { Component } from 'react';
import './App.css';
import MobileHeader from './components/Mobile-Header';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
	state = {};
	render() {
		return (
			<div className="App">
				<MobileHeader />
				<Header />
				<Main />
			</div>
		);
	}
}

export default App;
