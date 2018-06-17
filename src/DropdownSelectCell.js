import React from 'react'
import styles from './DropdownSelectCell.scss'
import {Picker} from "./components/Picker";

export class DropdownSelectCell extends React.Component{
	
	
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
						<Picker items={['a', 'b', 'c', 'd', 'e', 'f', 'd', 'e', 'f']}/>
					</div>
				</div>
			</div>
		)
	}
}