import botonRevelar from '../voto/botonRevelar.js';
import botonReset from '../reutilizable/botonReset.js'

const botonesVoto = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('botonesVoto');
	wrapperElement.appendChild(botonRevelar());
    wrapperElement.appendChild(botonReset());

	return wrapperElement;
};

export default botonesVoto;
