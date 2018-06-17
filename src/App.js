import React, { Component } from 'react';
import styles from './App.scss';
import { Page, Toolbar, Button, Switch, Input } from 'react-onsenui'
import {Cell} from "./Cell";
import {CellDatePick} from "./DatePickCell";
import {DropdownSelectCell} from "./DropdownSelectCell";

class App extends Component {
  render() {
    return (
      <div className={styles.main}>
	      <Cell need title='姓名:'/>
	      <Cell need title='手机号:'/>
	      <Cell need title='来访事由:'/>
	      <CellDatePick need title='来访时间:'/>
	      <DropdownSelectCell need title='证件号'/>
      </div>
    );
  }
}

export default App;
