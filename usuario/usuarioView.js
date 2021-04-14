import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import inputUsuarioCrear from '../usuario/inputUsuarioCrear.js';
import inputUsuarioUnirse from '../usuario/inputUsuarioUnirse.js';
import footer from '../reutilizable/footer.js';

const usuarioView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('usuarioView');

	wrapperElement.appendChild(encabezadoUsuario());
	wrapperElement.appendChild(inputUsuarioCrear());
	wrapperElement.appendChild(inputUsuarioUnirse());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default usuarioView;
