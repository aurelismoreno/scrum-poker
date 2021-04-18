import subEncabezadoVoto from '../voto/subEncabezadoVoto.js';
import opcionesVoto from '../voto/opcionesVoto.js';
import participantesVoto from '../voto/participantesVoto.js';
import botonesVoto from '../voto/botonesVoto.js'


const bodyViewVoto = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('bodyViewVoto','layoutBody');
	wrapperElement.appendChild(subEncabezadoVoto());
	wrapperElement.appendChild(opcionesVoto());
	wrapperElement.appendChild(participantesVoto());
    wrapperElement.appendChild(botonesVoto());
    

	return wrapperElement;
};

export default bodyViewVoto;
