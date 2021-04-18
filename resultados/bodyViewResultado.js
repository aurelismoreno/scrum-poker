import subEncabezadoResultados from '../resultados/subencabezadoResultados.js';
import resultados from '../resultados/resultados.js';
import participantesVoto from '../voto/participantesVoto.js';
import botonReset from '../reutilizable/botonReset.js';

const bodyViewResultado = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('bodyViewResultado', 'layoutBody');
	wrapperElement.appendChild(subEncabezadoResultados());
	wrapperElement.appendChild(participantesVoto());
	wrapperElement.appendChild(resultados());
	wrapperElement.appendChild(botonReset());

	return wrapperElement;
};

export default bodyViewResultado;
