import encabezado from '../reutilizable/encabezado.js';
import input from '../reutilizable/input.js';
import footer from '../reutilizable/footer.js';

const homeView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('homeView');

	wrapperElement.appendChild(encabezado());
	wrapperElement.appendChild(input());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default homeView;

const renderizado = () => {
	const container = document.querySelector('#container');
	container.appendChild(homeView());
};
renderizado();