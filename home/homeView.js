import encabezadoHome from './encabezadoHome.js';
import inputHome from './inputHome.js'
import footer from '../reutilizable/footer.js'

const homeView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('homeView');

	wrapperElement.appendChild(encabezadoHome());
	wrapperElement.appendChild(inputHome());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default homeView;
