import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';
import bodyViewResultado from './bodyViewResultado.js';
import footer from '../reutilizable/footer.js'


const resultadosView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('resultadosView');
	wrapperElement.appendChild(encabezadoUsuario());
	wrapperElement.appendChild(bodyViewResultado());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default resultadosView;
