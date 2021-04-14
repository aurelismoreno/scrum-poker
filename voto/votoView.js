import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import subencabezadoVoto from './subencabezadoVoto.js';
import opcionesVoto from './opcionesVoto.js'
import participantesVoto from './participantesVoto.js'
import botonRevelar from './botonRevelar.js'
import botonReset from '../reutilizable/botonReset.js'
import footer from '../reutilizable/footer.js';



const votoView = () => {
    const wrapperElement = document.createElement('section');

    wrapperElement.classList.add('votoView');

    wrapperElement.appendChild(encabezadoUsuario());
    wrapperElement.appendChild(subencabezadoVoto());
    wrapperElement.appendChild(opcionesVoto());
    wrapperElement.appendChild(participantesVoto());
    wrapperElement.appendChild(botonRevelar());
    wrapperElement.appendChild(botonReset());
	wrapperElement.appendChild(footer());

    return wrapperElement;
};

export default votoView;

