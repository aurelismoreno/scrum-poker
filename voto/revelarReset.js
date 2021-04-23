import botonRevelar from './botonRevelar.js';
import botonReset from '../reutilizable/botonReset.js'

const revelarReset = (nroSala,participantes) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('revelarReset');
	wrapperElement.appendChild(botonRevelar(nroSala,participantes));
    wrapperElement.appendChild(botonReset(nroSala));

	return wrapperElement;
};

export default revelarReset;
