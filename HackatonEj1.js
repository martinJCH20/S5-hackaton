import React, { Component } from 'react';
import './Components/Hackaton/ConversorDiv.css';

import { ConversorDiv } from './Components/Hackaton/ConversorDiv';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
            visibleform: true,
            valor: "",
            resultado: 0,
            txt1: "",
            txt2: "",
		};
    }

    calcular = (e) => {        
        var idV = document.getElementById('moneda-venta');
        var idC = document.getElementById('moneda-compra');
        var inputVal = document.getElementById('input-value');
        var result = 0;
        var text1 = "";
        var text2 = "";

        switch (idV.value) {
            case '1': 
                text1 = " Sol Peruano es igual a:";          
                if(idC.value === '1'){
                    result = inputVal.value / 1;
                }
                if(idC.value === '2'){
                    result = inputVal.value / 3.4;
                }
                if(idC.value === '3'){
                    result = inputVal.value / 4.22;
                }
                if(idC.value === '4'){
                    result = inputVal.value / 3.74;
                }
            break;
            case '2':
                text1 = " Dolares Estadounidenses  es igual a:";       
                if(idC.value === '1'){
                    result = inputVal.value / 0.30;
                }
                if(idC.value === '2'){
                    result = inputVal.value / 1;
                }
                if(idC.value === '3'){
                    result = inputVal.value / 1.25;
                }
                if(idC.value === '4'){
                    result = inputVal.value / 1.11;
                }
            break;
            case '3':   
                text1 = " Libra es igual a:";                   
                if(idC.value === '1'){
                    result = inputVal.value / 0.24;
                }
                if(idC.value === '2'){
                    result = inputVal.value / 0.80;
                }
                if(idC.value === '3'){
                    result = inputVal.value / 1;
                }
                if(idC.value === '4'){
                    result = inputVal.value / 0.89;
                }
            break;
            case '4':    
                text1 = " Euro es igual a:";               
                if(idC.value === '1'){
                    result = inputVal.value / 0.27;
                }
                if(idC.value === '2'){
                    result = inputVal.value / 0.90;
                }
                if(idC.value === '3'){
                    result = inputVal.value / 1.13;
                }
                if(idC.value === '4'){
                    result = inputVal.value / 1;
                }
            break;
            default:
                console.log(0);
            }

            switch (idC.value) { 
                case '1':   
                    text2 = " Sol Peruano";   
                break;
                case '2':   
                    text2 = " Dolares Estadounidenses";  
                break;
                case '3':   
                    text2 = " Libra"; 
                break;
                case '4':   
                    text2 = " Euro";      
                break;
                default:
                    console.log(""); 
            }
            
        this.setState({
            visibleform: false,
            resultado: result.toFixed(2),
            txt1: text1,
            txt2: text2,
            valor: inputVal.value,
		});
    }
    
    render() {
        const { visibleform, resultado, txt1, txt2, valor} = this.state;
		return (
			<div className='App'>
               <div className='content-title'><h2 className='title'>Conversor de divisas</h2></div>
               <ConversorDiv visible={visibleform} textButton='Convertir' activateLasers={this.calcular} valor={valor} resultado={resultado} text1={txt1} text2={txt2}>                   
               </ConversorDiv>
			</div>
		);
	}
}

export default App;