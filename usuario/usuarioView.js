import encabezado from '../reutilizable/encabezado.js';
import input from '../reutilizable/input.js';
import footer from '../reutilizable/footer.js';

const usuarioView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('usuarioView');

	wrapperElement.appendChild(encabezado());
	wrapperElement.appendChild(input());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default usuarioView;
