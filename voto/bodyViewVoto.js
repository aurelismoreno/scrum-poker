import subEncabezadoVoto from '../voto/subEncabezadoVoto.js';
import opcionesVoto from '../voto/opcionesVoto.js';
import participantesVoto from '../voto/participantesVoto.js';
import botonRevelar from '../voto/botonRevelar.js'
import botonReset from '../reutilizable/botonReset.js'

const bodyViewVoto = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('bodyViewVoto','layoutBody');
	wrapperElement.appendChild(subEncabezadoVoto());
	wrapperElement.appendChild(opcionesVoto());
	wrapperElement.appendChild(participantesVoto());
    wrapperElement.appendChild(botonRevelar());
    wrapperElement.appendChild(botonReset());

	return wrapperElement;
};

export default bodyViewVoto;
