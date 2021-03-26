import React, { Component } from 'react';

import './Stopwatch.scss';

export default class Stopwatch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			startTime: null,
			runningState: false,
			totalTime: 0,
		};
	}

	toggleState = () => {
		this.setState((prevState) => {
			const newState = {};

			if (prevState.runningState) {
				newState.runningState = false;
				newState.startTime = null;
			} else {
				newState.runningState = true;
				newState.startTime = new Date() - prevState.totalTime;
				setTimeout(this.updateTimeTimeout, 10);
			}

			return newState;
		});
	};

	updateTimeTimeout = () => {
		const { runningState } = this.state;

		if (runningState) {
			this.updateTime();
			setTimeout(this.updateTimeTimeout, 10);
		}
	};

	// eslint-disable-next-line consistent-return
	updateTime = () => {
		const now = new Date();

		this.setState((prevState) => ({
			totalTime: now - prevState.startTime,
		}));
	};

	clearTimer = () => {
		const now = new Date();

		this.setState({
			startTime: now,
			totalTime: 0,
		});
	};

	keyDown = (e) => {
		if (e.keyCode === 32) {
			this.toggleState();
		}
	};

	render() {
		const { totalTime } = this.state;

		return (
			<div className="stopwatch">
				<div
					className="time"
					onClick={this.toggleState}
					onKeyDown={(e) => this.keyDown(e)}
					role="button"
					tabIndex="0"
				>
					{new Date(totalTime).toISOString().substr(11, 8)}
					<span className="hundred-milliseconds">
						{new Date(totalTime).toISOString().substr(20, 1)}
					</span>
				</div>

				<button
					className="timer-button toggle-timer"
					type="button"
					onClick={this.toggleState}
				>
					Toggle
				</button>
				<button
					className="timer-button clear-timer"
					type="button"
					onClick={this.clearTimer}
				>
					Reset
				</button>
			</div>
		);
	}
}
