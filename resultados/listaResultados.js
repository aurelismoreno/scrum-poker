import itemResultados from './itemResultados.js';

const listaResultados = (arrayParticipantes) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('listaParticipantesResultados');

	arrayParticipantes.forEach((dataParticipante) => {
		wrapperElement.appendChild(itemResultados(dataParticipante));
	});

	return wrapperElement;
};

export default listaResultados;
