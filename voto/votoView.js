import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import bodyViewVoto from '../voto/bodyViewVoto.js'
import footer from '../reutilizable/footer.js';



const votoView = (salaData,nroSala,user,participantes) => {
    const wrapperElement = document.createElement('section');

    wrapperElement.classList.add('votoView');

    wrapperElement.appendChild(encabezadoUsuario(user));
    wrapperElement.appendChild(bodyViewVoto(nroSala,salaData,user,participantes));
	wrapperElement.appendChild(footer());

    return wrapperElement;
};

export default votoView;

