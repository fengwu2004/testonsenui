import React from "react";
import styles from './DatePickCell.scss'
import DatePicker from 'react-mobile-datepicker'
import rili from './assets/rili.png'

export class CellDatePick extends React.Component {
	
	state = {
		time: new Date(),
		isOpen: false,
		theme: 'default',
	}
	
	handleSelect = (time) => {
		this.setState({ time, isOpen: false });
	}
	
	handleToggle = (isOpen) => () => {
		this.setState({ isOpen });
	}
	
	handleThemeToggle = (theme) => () => {
		this.setState({ theme, isOpen: true });
	};
	
	render() {
		return (
			<div className={styles.main}>
				<div className={styles.content}>
					<div className={styles.importent}>
						{this.props.need && <span>＊</span>}
					</div>
					<div className={styles.title}>
						<span>{this.props.title}</span>
					</div>
					<div className={styles.inputcontent}>
						<div className="select-btn" onClick={this.handleThemeToggle('ios')}>{new Date(this.state.time).toLocaleString()}</div><img width='20' src={rili}/>
					</div>
					<DatePicker
						value={this.state.time}
						theme={this.state.theme}
						isOpen={this.state.isOpen}
						dateFormat={['YYYY年', 'MM月', 'DD日', 'h', 'm']}
						onSelect={this.handleSelect}
						onCancel={this.handleToggle(false)} />
				</div>
			</div>
		)
	}
}