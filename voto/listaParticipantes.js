import itemParticipantes from './itemParticipantes.js';

const arrayParticipantes = ['Aurelis', 'Aurelis 1', 'Aurelis 2', 'Aurelis 3'];

const listaParticipantes = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('listaParticipantes');

	arrayParticipantes.forEach(() => {
		wrapperElement.appendChild(itemParticipantes());
	});

	return wrapperElement;
};

export default listaParticipantes;
