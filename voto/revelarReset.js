import botonRevelar from './botonRevelar.js';
import botonReset from '../reutilizable/botonReset.js'

const revelarReset = (nroSala,salaData) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('revelarReset');
	wrapperElement.appendChild(botonRevelar(nroSala,salaData));
    wrapperElement.appendChild(botonReset(nroSala,salaData));

	return wrapperElement;
};

export default revelarReset;
