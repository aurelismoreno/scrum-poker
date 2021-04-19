import itemParticipantes from './itemParticipantes.js';



const listaParticipantes = (arrayParticipantes) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('listaParticipantes');

	arrayParticipantes.forEach((dataParticipante) => {
		wrapperElement.appendChild(itemParticipantes(dataParticipante));
	});

	return wrapperElement;
};

export default listaParticipantes;
