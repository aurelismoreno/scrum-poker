import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import bodyViewUsuario from './bodyViewUsuario.js'
import footer from '../reutilizable/footer.js';

const usuarioView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('usuarioView');

	wrapperElement.appendChild(encabezadoUsuario());
	wrapperElement.appendChild(bodyViewUsuario());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default usuarioView;
