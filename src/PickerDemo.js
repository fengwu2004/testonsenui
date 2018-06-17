import 'rmc-picker/assets/index.css';
import Picker from 'rmc-picker';
import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;
const len = 10;

export class PickerDemo extends React.Component {
	state = {
		disabled: false,
		items: this.getItems(count),
		value: `${count + len / 2}`,
	};
	
	onChange = (value) => {
		console.log('onChange', value);
		this.setState({
			value,
		});
	}
	
	onScrollChange = (value) => {
		console.log('onScrollChange', value);
	}
	
	disable = () => {
		this.setState({
			disabled: !this.state.disabled,
		});
	}
	
	getItems(start) {
		const items = [];
		for (let i = start; i < start + len; i++) {
			items.push(<Picker.Item value={i + ''} key={i}>
				{count} {i}
			</Picker.Item>);
		}
		return items;
	}
	
	rerender = () => {
		count += len;
		const items = this.getItems(count);
		this.setState({
			items,
			value: String(count),
		});
	}
	
	render() {
		return (
			<div style={{ background: '#f5f5f9', padding: 10 }}>
				<button onClick={this.rerender}>rerender</button>
				&nbsp;
				<button onClick={this.disable}>{this.state.disabled ? 'enable' : 'disable'}</button>
				<Picker
					selectedValue={this.state.value}
					disabled={this.state.disabled}
					onValueChange={this.onChange}
					onScrollChange={this.onScrollChange}
				>
					{this.state.items}
				</Picker>
			</div>
		);
	}
}