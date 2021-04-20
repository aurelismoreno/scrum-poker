import subEncabezadoVoto from '../voto/subEncabezadoVoto.js';
import opcionesVoto from '../voto/opcionesVoto.js';
import participantesVoto from '../voto/participantesVoto.js';
import revelarReset from '../voto/revelarReset.js'


const bodyViewVoto = (nroSala,salaData,user) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('bodyViewVoto','layoutBody');
	wrapperElement.appendChild(subEncabezadoVoto(nroSala));
	wrapperElement.appendChild(opcionesVoto(salaData,user,nroSala));
	wrapperElement.appendChild(participantesVoto(Object.values(salaData.participantes)));
    
    if(salaData.usuarioAdmin === user.uid){
		wrapperElement.appendChild(revelarReset(nroSala,salaData));
	}

	return wrapperElement;
};

export default bodyViewVoto;
