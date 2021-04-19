import encabezadoHome from './encabezadoHome.js';
import footer from '../reutilizable/footer.js'

const homeView = () => {
	const wrapperElement = document.createElement('div');

	wrapperElement.classList.add('homeView');

	wrapperElement.appendChild(encabezadoHome());
	wrapperElement.appendChild(footer());

	return wrapperElement;
};

export default homeView;
