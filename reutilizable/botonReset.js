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
			.set({ revelar: false }, { merge: true })
			.then(() => {
				console.log('Document successfully written!');
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