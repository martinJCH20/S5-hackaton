import React, { Component } from 'react';
import './Components/Hackaton/ConversorDiv.css';

import { ConversorDiv } from './Components/Hackaton/ConversorDiv';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
            visibleform: true,
		};
    }
    
    render() {
        const { visibleform } = this.state;
		return (
			<div className='App'>
               <div className='content-title'><h2 className='title'>Conversor de divisas</h2></div>
               <ConversorDiv visible={visibleform}></ConversorDiv>
			</div>
		);
	}
}

export default App;