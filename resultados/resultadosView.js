import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import subencabezadoResultados from './subencabezadoResultados.js';
import resultados from './resultados.js';
import participantesVoto from '../voto/participantesVoto.js';
import botonReset from '../reutilizable/botonReset.js'

const resultadosView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('resultadosView');
	wrapperElement.appendChild(encabezadoUsuario());
	wrapperElement.appendChild(subencabezadoResultados());
	wrapperElement.appendChild(resultados());
	wrapperElement.appendChild(participantesVoto());
	wrapperElement.appendChild(botonReset())

	return wrapperElement;
};

export default resultadosView;
