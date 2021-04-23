import subEncabezadoVoto from '../voto/subEncabezadoVoto.js';
import opcionesVoto from '../voto/opcionesVoto.js';
import subEncabezadoParticipantes from './subEncabezadoParticipantes.js';
import revelarReset from '../voto/revelarReset.js'


const bodyViewVoto = (nroSala,salaData,user,participantes) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('bodyViewVoto','layoutBody');
	wrapperElement.appendChild(subEncabezadoVoto(nroSala));
	wrapperElement.appendChild(opcionesVoto(user,nroSala));
	wrapperElement.appendChild(subEncabezadoParticipantes(participantes));
    
    if(salaData.usuarioAdmin === user.uid){
		wrapperElement.appendChild(revelarReset(nroSala,participantes));
	}

	return wrapperElement;
};

export default bodyViewVoto;
