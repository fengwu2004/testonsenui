import React from 'react'
import styles from './Picker.scss'

export class Picker extends React.Component{
	
	handleSelect = (item)=>{
	
	
	}

	render() {
		
		const { items } = this.props
		
		return (
			<div className={styles.main}>
				<div className={styles.bg}></div>
				<div className={styles.content}>
					{items.map(item => {
						return (
							<div onClick={()=>this.handleSelect(item)}>{item}</div>
						)
					})}
				</div>
			</div>
		)
	}
}