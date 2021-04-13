import encabezadoUsuario from '../usuario/encabezadoUsuario.js';
import inputUsuario from '../usuario/inputUsuario.js';
import footer from '../reutilizable/footer.js';

const usuarioView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('usuarioView');

	wrapperElement.appendChild(encabezadoUsuario());
	wrapperElement.appendChild(inputUsuario());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default usuarioView;
