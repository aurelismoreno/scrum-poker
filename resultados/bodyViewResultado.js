import subEncabezadoResultados from '../resultados/subencabezadoResultados.js';
import resultados from '../resultados/resultados.js';
import participantesResultados from '../resultados/participantesResultados.js'
import botonReset from '../reutilizable/botonReset.js';

const bodyViewResultado = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('bodyViewResultado', 'layoutBody');
	wrapperElement.appendChild(subEncabezadoResultados());
	wrapperElement.appendChild(resultados());
	wrapperElement.appendChild(participantesResultados());
	
	wrapperElement.appendChild(botonReset());

	return wrapperElement;
};

export default bodyViewResultado;
