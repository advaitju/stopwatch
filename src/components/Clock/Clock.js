import { h, Component } from 'preact';

class Clock extends Component {
	state = {
		time: 0,
		timerStart: undefined,
		stopwatchRunning: false
	}

	toggleTimer = () => {
		if (this.timer) {
			clearInterval(this.timer);
			delete this.timer;

			this.setState({
				stopwatchRunning: false
			});
		}
		else {
			this.setState({
				timerStart: new Date()
			});

			this.timer = setInterval(() => {
				this.setState({
					time: new Date()
				});
			}, 1000);
		}
	}

	resetTimer = () => {

	}

	render() {
		const { time } = this.state;

		return (
			<div class="clock">
				<span class="time" onclick={this.toggleTimer}>{time}</span>
				<div class="buttons">
					<button class="toggle" onclick={this.toggleTimer}>{this.state.stopwatchRunning ? 'Stop' : 'Start' }</button>
					<button class="reset">Reset</button>
				</div>
			</div>
		);
	}
}

export default Clock;