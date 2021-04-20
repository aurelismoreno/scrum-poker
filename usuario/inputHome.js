const inputHome = (user) => {
	const template = `
    <div class="inputHome-interno">
		<form action="" class="inputHome-body">
			<label class="mb1">Usuario</label>
			<input id="inputHomeUsuario" class="mb1" type="text" name="usuario" placeholder="Ingrese usuario">
			<button class="inputHome-BotonIngresar mb1">Ingresar</button>
		</form>
    </div>
  `;

	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('inputHome', 'layoutBody');
	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputIngresarElement = wrapperElement.querySelector('#inputHomeUsuario');
		const nombreUsuario = inputIngresarElement.value;

		//ACTUALIZANDO FORMATO DE NOMBRE DE USUARIO

		user
			.updateProfile({
				displayName: nombreUsuario,
			})
			.then(function () {
				console.log('Nombre actualizado satisfactoriamente');
				window.location.reload();
			})
			.catch((error) => {
				console.log('error actualizando nombre de usuario', error);
			});
	};
	const ingresarElement = wrapperElement.querySelector('.inputHome-BotonIngresar');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputHome;
