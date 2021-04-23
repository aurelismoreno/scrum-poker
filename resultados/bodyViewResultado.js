import subEncabezadoResultados from '../resultados/subencabezadoResultados.js';
import resultados from '../resultados/resultados.js';
import participantesResultados from '../resultados/participantesResultados.js'
import botonReset from '../reutilizable/botonReset.js';

const bodyViewResultado = (salaData,nroSala,user,participantes) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('bodyViewResultado', 'layoutBody');
	wrapperElement.appendChild(subEncabezadoResultados());
	wrapperElement.appendChild(resultados(salaData));
	wrapperElement.appendChild(participantesResultados(participantes));
	
	if(salaData.usuarioAdmin === user.uid){
		wrapperElement.appendChild(botonReset(nroSala));
	}

	return wrapperElement;
};

export default bodyViewResultado;
