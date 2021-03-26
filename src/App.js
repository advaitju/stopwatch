import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import './App.scss';

import Stopwatch from './components/Stopwatch/Stopwatch';

export default class App extends PureComponent {
	toggleAll = () => {
		document.querySelectorAll('.time').forEach((el) => {
			el.click();
		});
	};

	clearAll = () => {
		document.querySelectorAll('.clear-timer').forEach((el) => {
			el.click();
		});
	};

	render() {
		return (
			<div className="app">
				<Helmet title="Stopwatch" />

				<div className="stopwatches">
					<button
						className="timer-button"
						type="button"
						onClick={this.toggleAll}
					>
						Toggle all
					</button>
					<button
						className="timer-button clear-all"
						type="button"
						onClick={this.clearAll}
					>
						Reset all
					</button>

					<Stopwatch />
					<Stopwatch />
				</div>
			</div>
		);
	}
}
