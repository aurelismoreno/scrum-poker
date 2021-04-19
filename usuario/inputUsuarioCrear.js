const inputUsuarioCrear = () => {
	const template = `
    <div class="inputUsuarioCrear-interno">
		<form action="" class="inputHome-body">
			<label class="mb1">Crear Sala</label>
			<button class="inputUsuarioCrear-botonCrear">Crear</button>
		</form>
    </div>
  `;

	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('inputUsuarioCrear');

	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const db = firebase.firestore();

		db.collection('sala')
			.add({
				participantes: {},
				resultado: 0,
				revelar: false,
				fechaCreacion: new Date().toISOString(),
			})
			.then((docRef) => {
				console.log('Document written with ID: ', docRef.id);
				const url = `?sala=${encodeURI(docRef.id)}`;
				window.location = url;
			})
			.catch((error) => {
				console.error('Error adding document: ', error);
			});
	};

	const ingresarElement = wrapperElement.querySelector('.inputUsuarioCrear-botonCrear');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputUsuarioCrear;
