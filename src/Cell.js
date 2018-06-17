import React from 'react'
import styles from './Cell.scss'

export class Cell extends React.Component{
	
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
						<input type='text' placeholder='请输入'/>
					</div>
				</div>
			</div>
		)
	}
}