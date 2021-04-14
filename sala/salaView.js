import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import subencabezadoSala from './subencabezadoSala.js';
import opcionesVoto from './opcionesVoto.js'
import participantes from './participantes.js'
import revelarReset from './revelarReset.js'
import footer from '../reutilizable/footer.js';



const salaView = () => {
    const wrapperElement = document.createElement('div');

    wrapperElement.classList.add('salaView');

    wrapperElement.appendChild(encabezadoUsuario());
    wrapperElement.appendChild(subencabezadoSala());
    wrapperElement.appendChild(opcionesVoto());
    wrapperElement.appendChild(participantes());
    wrapperElement.appendChild(revelarReset());
	wrapperElement.appendChild(footer());

    return wrapperElement;
};

export default salaView;

