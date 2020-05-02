import React, { Component }  from 'react';
import './Components/Hackaton/FormularioContacto.css';

import {DatosUsuario} from './Components/Hackaton/FormularioContacto';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 display: false,
             usuario: '',
             email: '',
             password: '',
             phone: '',
             submitted: false,
		};
    }
    
  

	render() {
        const { display,user, email, passw, phone, submitted } = this.state;
		return (	
			<div className='App'>	
				<header className='App-header'>
                <div className='cont-general'>
                <div className='cont-left'>
                {!submitted ? (
                <form className='form-register' onSubmit={this.onSubmitMessage}> 
                <DatosUsuario></DatosUsuario>
                </form>
                ) : null}
                {display ? 
                    <div>
                     <h2 className='primary-title'>Gracias por registrar sus datos</h2>  
                        <div className='table-resumen'>
                        <tr><td><label>Tus datos son los siguientes: </label></td><td></td></tr>
                        <tr><td><label>Usuario: </label></td><td>{user}</td></tr>
                        <tr><td><label>Email: </label></td><td>{email}</td></tr>
                        <tr><td><label>Contraseña: </label></td><td>{passw}</td></tr>
                        <tr><td><label>Teléfono: </label></td><td>{phone}</td></tr>
                        <tfoot><tr>
                        <td colSpan="2" className='foot-form'>
                        <button className='primary-button'  onClick={this.onSubmitReturn}>
                        <p className='text-button'>Retornar</p>
                        </button>
                        </td>
                        </tr></tfoot>
                        </div>
                    </div>
                : null}
                </div>
                <div className='cont-right'>
                    <img className='img-right' src="https://www.solofondos.com/wp-content/uploads/2016/01/imagenes-para-celular-gratis.jpg" alt=""/>
                </div>
                </div>
				</header>	
			</div>
		);
	}
}

export default App;