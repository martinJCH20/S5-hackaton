import React from 'react';

export const ConversorDiv = (props) => {
	return props.visible ? (
		<div className='content-form'>
            <div className='content-input'>
                <input type="number" className="input-number" placeholder="0.00" step="0.01" min="0" />
            </div>
            <div className='content-selections'>
                <div className='content-venta'>
                <select className='selection-moneda'>
                    <option value="" selected disabled>seleccionar moneda de venta</option>
                </select>
                </div>
                <div className='content-compra'>
                <select className='selection-moneda'>
                    <option value="" selected disabled>seleccionar moneda de compra</option>
                </select>
                </div>
            </div>
            <div className='content-button'>
                <button className='primary-button'>
                <a href={props.link}>
                    <p className='text-button'>{props.textButton}</p>
                </a>
                </button>
            </div>
        </div>
	) : null;
};