import homeView from './home/homeView.js';
import usuarioView from './usuario/usuarioView.js';
import salaView from './sala/salaView.js'
import resultadosView from './resultados/resultadosView.js'

const routeView = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const viewName = urlParams.get('view');

	if (viewName === 'home' || viewName === null) {
		return homeView();
	}
	if (viewName === 'usuario') {
		return usuarioView();
	}
	if (viewName === 'sala') {
		return salaView();
	}
	if (viewName === 'resultados') {
		return resultadosView();
	}

	return homeView();
};

export default routeView;

const renderizado = () => {
	const container = document.querySelector('#container');
	container.appendChild(routeView());
};
renderizado();
