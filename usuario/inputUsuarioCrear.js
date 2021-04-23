const inputUsuarioCrear = (user) => {
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
				resultado: 0,
				revelar: false,
				fechaCreacion: new Date().toISOString(),
				usuarioAdmin: user.uid,
			})
			.then((salaDocRef) => {
				return salaDocRef
					.collection('participantes')
					.doc(user.uid)
					.set({
						nombre: user.displayName || user.uid,
						puntuacion: 0,
						voto: false,
					})
					.then(() => {
						console.log('Document written with ID: ', salaDocRef.id);
						const url = `?sala=${encodeURI(salaDocRef.id)}`;
						window.location = url;
						return salaDocRef;
					});
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
