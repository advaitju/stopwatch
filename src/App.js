import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import './App.scss';

import Stopwatch from './components/Stopwatch/Stopwatch';

export default class App extends PureComponent {
	render() {
		return (
			<div className="app">
				<Helmet title="Stopwatch" />

				<div className="stopwatches">
					<Stopwatch />
					<Stopwatch />
				</div>
			</div>
		);
	}
}
