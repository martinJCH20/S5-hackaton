import React from 'react';

export const DatosUsuario = (props) =>{
    
    return (
    <div>
        <h2 className='primary-title'>{props.title}</h2>
        <div className="form-content">
            <div className="form-img"><img src="https://img.icons8.com/ios-glyphs/30/000000/email.png"  alt=""/></div>
            <div className='input-form'><input type="email"  value={props.email} onChange={props.emailChange}/></div>
        </div><br />
        <div className="form-content">
            <div className="form-img"><img src="https://img.icons8.com/android/24/000000/phone.png" alt=""/></div>
            <div className='input-form'><input type="tel" pattern="[0-9]{9}" value={props.phone} onChange={props.phoneChange}/></div>
        </div><br />
        <div className="form-content">
            <div className="form-img"><img src="https://img.icons8.com/metro/26/000000/user-male-circle.png" alt=""/></div>
            <div className='input-form'><input value={props.usuario} onChange={props.userChange}/></div>
        </div><br />
        <div className="form-content">
            <div className="form-img"><img src="https://img.icons8.com/material-rounded/24/000000/chat.png" alt=""/></div>
            <div className='input-form'><textarea value={props.comentario} onChange={props.comentChange}></textarea></div>
        </div>
        <div>
        <button className='primary-button'>
        <p className='text-button'>Enviar</p>
        </button>
        </div>
    </div>
    );
}