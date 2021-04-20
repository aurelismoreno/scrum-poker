import homeView from './home/homeView.js';
import usuarioView from './usuario/usuarioView.js';
import votoView from './voto/votoView.js';
import resultadosView from './resultados/resultadosView.js';
import './firebase.js';

const db = firebase.firestore();

const routeView = () => {
	const urlParams = new URLSearchParams(window.location.search);
	firebase.auth().onAuthStateChanged((user) => {
		console.log('user', user); // PARA VER SI CAMBIA EL NOMBRE
		if (user) {
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
							return;
						}
						if (!salaData.participantes[user.uid]) {
							salaData.participantes[user.uid] = {
								nombre: user.displayName || user.uid,
								puntuacion: 0,
								voto: false,
							};
							db.collection('sala')
								.doc(nroSala)
								.set(salaData)
								.then(() => {
									console.log('Document successfully written!');
								})
								.catch((error) => {
									console.error('Error writing document: ', error);
								});

							return;
						}

						if (salaData.revelar === true) {
							renderizado(resultadosView(user,salaData,nroSala));
						} else {
							renderizado(votoView(salaData,nroSala,user));
						}
					});
			} else {
				renderizado(usuarioView(user));
			}
		} else {
			firebase
				.auth()
				.signInAnonymously()
				.then((usuario) => {
					console.log('usuarioCreado', usuario);
				})
				.catch((error) => {
					console.log('error creando usuario', error);
				});
		}
	});
};

export default routeView;

const renderizado = (viewElement) => {
	const container = document.querySelector('#container');
	container.innerHTML = '';
	container.appendChild(viewElement);
};
routeView();
