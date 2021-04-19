import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import bodyViewResultado from './bodyViewResultado.js';
import footer from '../reutilizable/footer.js'


const resultadosView = (user) => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('resultadosView');
	wrapperElement.appendChild(encabezadoUsuario(user));
	wrapperElement.appendChild(bodyViewResultado());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default resultadosView;
