const arrayVotoValores = [0, 1 / 2, 1, 2, 3, 5, 8, 13, 21, 34, '?', '∞'];

const opcionesVoto = (salaData, user,nroSala) => {
	const botonVoto = (botonTexto) => {
		const template = `${botonTexto}`;
		const buttonElement = document.createElement('button');

		buttonElement.classList.add('botonVoto');

		buttonElement.setAttribute('type', 'button');
		buttonElement.innerHTML = template;

		const buttonElementOnclick = (evt) => {
			evt.preventDefault();
			console.log(salaData, user, botonTexto);
			salaData.participantes[user.uid].puntuacion = botonTexto;
			salaData.participantes[user.uid].voto = true;
			const db = firebase.firestore();

			db.collection('sala')
				.doc(nroSala)
				.set({ participantes: salaData.participantes }, { merge: true })
				.then(() => {
					console.log('Document successfully written!');
				})
				.catch((error) => {
					console.error('Error writing document: ', error);
				});
		};
		buttonElement.addEventListener('click', buttonElementOnclick);

		return buttonElement;
	};

	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('opcionesVoto');

	arrayVotoValores.forEach((valorVoto) => {
		wrapperElement.appendChild(botonVoto(valorVoto));
	});

	return wrapperElement;
};

export default opcionesVoto;
