import React from 'react';

const monedas = [
    {id: 1, title: 'Sol Peruano', simbolo: 'S/. '},
    {id: 2, title: 'Dolares Estadounidenses', simbolo: '$ '},
    {id: 3, title: 'Libra', simbolo: '£ '},
    {id: 4, title: 'Euro', simbolo: '€ '}
  ];




export const ConversorDiv = (props) => {
	return props.visible ? (
		<div className='content-form'>
            <div className='content-input'>
                <input type="number" id="input-value" className="input-number" placeholder="0.00" step="0.01" min="0" />
            </div>
            <div className='content-selections'>
                <div className='content-venta'>
                <select className='selection-moneda' id='moneda-venta'>
                    <option value="" selected disabled>seleccionar moneda de venta</option>
                    {monedas.map((opt) =>
                        <option value={opt.id}>{opt.title}</option>
                    )};
                </select>
                </div>
                <div className='content-compra'>
                <select className='selection-moneda' id='moneda-compra'>
                    <option value="" selected disabled>seleccionar moneda de compra</option>
                    {monedas.map((opt) =>
                        <option value={opt.id}>{opt.title}</option>
                    )};
                </select>
                </div>
            </div>
            <div className='content-button'>
                <button className='primary-button' onClick={props.activateLasers}>
                    <p className='text-button'>{props.textButton}</p>
                </button>
            </div>
        </div>
	) : 
    <div className='content-form'>
        <p className='text-result'>{props.valor}{props.text1}</p>
        <p className='text-result'>{props.resultado}{props.text2}</p>
    </div>;
};