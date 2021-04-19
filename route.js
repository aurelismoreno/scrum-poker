import homeView from './home/homeView.js';
import usuarioView from './usuario/usuarioView.js';
import votoView from './voto/votoView.js';
import resultadosView from './resultados/resultadosView.js';
import './firebase.js';

const db = firebase.firestore();

const routeView = () => {
	const urlParams = new URLSearchParams(window.location.search);
	// const viewName = urlParams.get('view');
	const nroSala = urlParams.get('sala');

	if (nroSala) {
		db.collection('sala')
			.doc(nroSala)
			.onSnapshot((doc) => {
				const salaData = doc.data();
				console.log('Current data: ', salaData);
				if (!salaData) {
					const url = `?`;
					window.location = url;
				}
				if (salaData.revelar === true) {
					renderizado(resultadosView());
				} else {
					renderizado(votoView());
				}
			});
	} else {
		renderizado(usuarioView());
	}

	// if (viewName === 'home' || viewName === null) {
	// 	return homeView();
	// }
	// if (viewName === 'usuario') {
	// 	return usuarioView();
	// }
	// if (viewName === 'voto') {
	// 	return votoView();
	// }
	// if (viewName === 'resultados') {
	// 	return resultadosView();
	// }

	// return homeView();
};

export default routeView;

const renderizado = (viewElement) => {
	const container = document.querySelector('#container');
	container.innerHTML = '';
	container.appendChild(viewElement);
};
routeView();
