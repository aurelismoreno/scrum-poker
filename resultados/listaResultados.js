import itemResultados from './itemResultados.js';

const arrayParticipantes = ['Aurelis', 'Aurelis 1', 'Aurelis 2', 'Aurelis 3'];

const listaParticipantesResultados = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('listaParticipantesResultados');

	arrayParticipantes.forEach(() => {
		wrapperElement.appendChild(itemResultados());
	});

	return wrapperElement;
};

export default listaParticipantesResultados;
