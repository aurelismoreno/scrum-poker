import homeView from './home/homeView.js';
import usuarioView from './usuario/usuarioView.js';
import votoView from './voto/votoView.js';
import resultadosView from './resultados/resultadosView.js';
import './firebase.js';

const db = firebase.firestore();

const renderSala = (nroSala, user, salaData,participantes) => {
	console.log('Current data: ', salaData);
	if (!salaData) {
		const url = `?`;
		window.location = url;
		return;
	}
	const participanteDocRef = db
		.collection('sala')
		.doc(nroSala)
		.collection('participantes')
		.doc(user.uid);

	participanteDocRef.get().then((participanteSnapshot) => {
		if (!participanteSnapshot.exists) {
			participanteDocRef
				.set({
					nombre: user.displayName || user.uid,
					puntuacion: 0,
					voto: false,
				})
				.then(() => {
					console.log('Document successfully written!');
				})
				.catch((error) => {
					console.error('Error writing document: ', error);
				});
			return;
		}
		if (salaData.revelar === true) {
			renderizado(resultadosView(user, salaData, nroSala, participantes));
		} else {
			renderizado(votoView(salaData, nroSala, user,participantes));
		}
	});
};

const routeView = () => {
	const urlParams = new URLSearchParams(window.location.search);
	firebase.auth().onAuthStateChanged((user) => {
		console.log('user', user); // PARA VER SI CAMBIA EL NOMBRE
		if (user) {
			const nroSala = urlParams.get('sala');
			let participantes = [];
			let salaData = {}
			if (nroSala) {
				db.collection('sala')
					.doc(nroSala)
					.onSnapshot((salaSnapshot) => {
						salaData = salaSnapshot.data();
						renderSala(nroSala, user, salaData , participantes);
					});

				db.collection('sala')
					.doc(nroSala)
					.collection('participantes')
					.onSnapshot((participantesSnapshot) => {
						console.log('participantesSnapshot', participantesSnapshot);
						participantes = [];

						participantesSnapshot.docs.forEach((participanteSnapshot) => {
							const participanteData = participanteSnapshot.data();

							participantes.push(participanteData);
						});
						
						renderSala(nroSala, user, salaData , participantes);
						
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
