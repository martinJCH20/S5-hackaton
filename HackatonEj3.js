import React, { Component }  from 'react';
import './Components/Hackaton/FormularioContacto.css';

import {DatosUsuario} from './Components/Hackaton/FormularioContacto';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 display: false,
             email: '',
             phone: '',
             usuario: '',
             comentario: '',
             submitted: false,
		};
    }

    onSubmitMessage = (e) => {
		e.preventDefault();
		if (this.state.usuario.length === 0 || this.state.usuario.email === 0 || this.state.usuario.password === 0 || this.state.usuario.phone === 0) {
			return;
		} else {
			this.setState({
                user: this.state.usuario,
                email: this.state.email,
                comentario: this.state.comentario,
                phone: this.state.phone,
				display: true,
				submitted: !this.state.submitted,
			});
        }
    };
    
  haUserChange = (e) => {
		this.setState({
			usuario: e.target.value,
		});
    };

    haEmailChange = (e) => {
		this.setState({
			email: e.target.value,
		});
    };

    haComent = (e) => {
		this.setState({
			comentario: e.target.value,
		});
    };

    haPhoneChange = (e) => {
		this.setState({
			phone: e.target.value,
		});
    };
    
    onSubmitReturn= () => {
        this.setState({
            usuario: '',
            email: '',
            comentario: '',
            phone: '',
            display: false,
            submitted: !this.state.submitted,
        });
   }

	render() {
        const { display,user, email, comentario, phone, submitted } = this.state;
		return (	
			<div className='App'>	
				<header className='App-header'>
                <div className='cont-general'>
                <div className='cont-left'>
                {!submitted ? (
                <form className='form-register' onSubmit={this.onSubmitMessage}> 
                <DatosUsuario title="Ingrese sus datos para el registro"
                 usuario={this.state.usuario} 
                 userChange={this.haUserChange}
                 email={this.state.email} 
                 emailChange={this.haEmailChange}
                 comentario={this.state.comentario} 
                 comentChange={this.haComent}
                 phone={this.state.phone} 
                 phoneChange={this.haPhoneChange}
                ></DatosUsuario>
                </form>
                ) : null}
                {display ? 
                    <div className='form-register'>
                     <h2 className='primary-title'><p>Gracias por registrar sus datos</p></h2> 
                        <div className='table-resumen'>
                        <div><label>Tus datos son los siguientes: </label></div> <br/>
                        <div><div className="form-img"><label>Email: </label></div><p className="result">{email}</p></div>
                        <div><div className="form-img"><label>Teléfono: </label></div><p className="result">{phone}</p></div>
                        <div><div className="form-img"><label>Usuario: </label></div><p className="result">{user}</p></div>
                        <div><div className="form-img"><label>Comentario: </label></div><p className="result">{comentario}</p></div>
                        <div>
                        <button className='primary-button'  onClick={this.onSubmitReturn}>
                        <p className='text-button'>Retornar</p>
                        </button>
                        </div>
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