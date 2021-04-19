import botonRevelar from './botonRevelar.js';
import botonReset from '../reutilizable/botonReset.js'

const revelarReset = (nroSala) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('revelarReset');
	wrapperElement.appendChild(botonRevelar(nroSala));
    wrapperElement.appendChild(botonReset());

	return wrapperElement;
};

export default revelarReset;
