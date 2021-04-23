const botonRevelar = (nroSala, participantes) => {
	const template = `
    <div class="botonRevelar-interno">
		<button class="botonRevelar-button" id="botonRevelarButton">Revelar</button>
    </div>`;
	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('botonRevelar');
	wrapperElement.innerHTML = template;

	//    COMPORTAMIENTO BOTON REVELAR
	const revelarElementOnclick = (evt) => {
		evt.preventDefault();

		let suma = 0;
		let promedio = 0;
		let cantidadVotos = 0;

		participantes.forEach((participante) => {
			if (typeof participante.puntuacion === 'number') {
				suma = suma + participante.puntuacion;
				cantidadVotos = cantidadVotos + 1;
			}
		});

		if (cantidadVotos != 0) {
			promedio = suma / cantidadVotos;
		} else {
			promedio = 'S/V';
		}

		const db = firebase.firestore();

		db.collection('sala')
			.doc(nroSala)
			.set({ revelar: true, resultado: promedio }, { merge: true })
			.then(() => {
				console.log('Document successfully written!');
			})
			.catch((error) => {
				console.error('Error writing document: ', error);
			});
	};

	const revelarElement = wrapperElement.querySelector('.botonRevelar-button');

	revelarElement.addEventListener('click', revelarElementOnclick);

	return wrapperElement;
};

export default botonRevelar;
