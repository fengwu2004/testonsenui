import React from 'react'
import styles from './Picker.scss'
import PropTypes from 'prop-types'

export class Picker extends React.Component {
	
	handleSelect = (item)=>{
	
		this.props.valueChange(item)
	}

	render() {
		
		const { items } = this.props
		
		return (
			<div className={styles.main}>
				<div className={styles.bg} onClick={this.props.onClose}></div>
				<div className={styles.content}>
					{items.map((item, index) => {
						return (
							<div key={index} onClick={()=>this.handleSelect(item)}>{item}</div>
						)
					})}
				</div>
			</div>
		)
	}
}

Picker.propTypes = {
	onClose:PropTypes.func.isRequired,
	valueChange:PropTypes.func.isRequired
}