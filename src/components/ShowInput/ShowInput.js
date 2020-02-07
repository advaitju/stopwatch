import { h, Component } from 'preact';

class ShowInput extends Component {
	state = {
		value: 'initial'
	};

	onInput = ev => {
		this.setState({ value: ev.target.value });
	}

	onSubmit = ev => {
		ev.preventDefault();
		this.setState({ name: this.state.value });
	}

	render() {
		const {
			name,
			value,
		} = this.state;

		return (
			<div>
				<p>Input: {name}</p>
				<form onSubmit={this.onSubmit}>
					<input type="text" value={value} onInput={this.onInput} /><br />
					<button type="submit">Update</button>
				</form>
			</div>
		);
	}
}

export default ShowInput;