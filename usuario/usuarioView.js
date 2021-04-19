import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import bodyViewUsuario from './bodyViewUsuario.js'
import footer from '../reutilizable/footer.js';

const usuarioView = (user) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('usuarioView');

	wrapperElement.appendChild(encabezadoUsuario(user));
	wrapperElement.appendChild(bodyViewUsuario(user));
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default usuarioView;
