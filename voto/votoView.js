import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import bodyViewVoto from '../voto/bodyViewVoto.js'
import footer from '../reutilizable/footer.js';



const votoView = () => {
    const wrapperElement = document.createElement('section');

    wrapperElement.classList.add('votoView');

    wrapperElement.appendChild(encabezadoUsuario());
    wrapperElement.appendChild(bodyViewVoto());
	wrapperElement.appendChild(footer());

    return wrapperElement;
};

export default votoView;

