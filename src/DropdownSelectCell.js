import React from 'react'
import styles from './DropdownSelectCell.scss'
import {Picker} from "./components/Picker";
import xiala from './assets/xiala.png'

export class DropdownSelectCell extends React.Component{
	
	state = {
		showPicker:false
	}
	
	onHandleSelect = ()=>{
	
		this.setState(()=>({
			showPicker:true
		}))
	}
	
	closePicker = ()=>{
		
		this.setState(()=>({
			showPicker:false
		}))
	}
	
	handleValueChange = (value)=>{
	
		console.log(value)
	}
	
	render() {
		return (
			<div className={styles.main}>
				<div className={styles.content}>
					<div className={styles.lineone}>
						<div className={styles.importent}>
							{this.props.need && <span>＊</span>}
						</div>
						<div className={styles.title}>
							<span>{this.props.title}</span>
						</div>
						<div className={styles.inputcontent} onClick={this.onHandleSelect}>居民身份证<img src={xiala} width='10'/></div>
					</div>
					<div className={styles.linetwo}>
						<input placeholder={'请输入'}/>
					</div>
				</div>
				{this.state.showPicker && <Picker valueChange={this.handleValueChange} items={['a', 'b', 'c', 'd', 'e', 'f', 'd', 'e', 'f']} onClose={this.closePicker}/>}
			</div>
		)
	}
}