const botonReset = (nroSala) => {
	const template = `
    <div class="botonReset-interno">
		<button class="botonReset-button" id="botonResetButton">Reset</button>
    </div>`;
	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('botonReset');
	wrapperElement.innerHTML = template;

	//  COMPORTAMIENTO BOTON RESET
	const resetElementOnclick = (evt) => {
		evt.preventDefault();

		const db = firebase.firestore();

		db.collection('sala')
			.doc(nroSala)
			.set({ revelar: false, resultado: 0 }, { merge: true })
			.then(() => {
				console.log('Document successfully written!');
			})
			.catch((error) => {
				console.error('Error writing document: ', error);
			});

		db.collection('sala')
			.doc(nroSala)
			.collection('participantes')
			.get()
			.then((participantesSnapshot) => {
				console.log('Data', participantesSnapshot);
				participantesSnapshot.docs.forEach((participanteSnapshot) => {
					db.collection('sala')
						.doc(nroSala)
						.collection('participantes')
						.doc(participanteSnapshot.id)
						.set({
							puntuacion: 0,
							voto: false,
						})
						.then(() => {
							console.log('Document successfully written!');
						})
						.catch((error) => {
							console.error('Error writing document: ', error);
						});
				});
			})
			.catch((error) => {
				console.error('Error writing document: ', error);
			});
	};

	const resetElement = wrapperElement.querySelector('.botonReset-button');

	resetElement.addEventListener('click', resetElementOnclick);

	return wrapperElement;
};

export default botonReset;
