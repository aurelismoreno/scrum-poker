const inputHome = () => {
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
	wrapperElement.classList.add('inputHome','layoutBody');
	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputIngresarElement = wrapperElement.querySelector('#inputHomeUsuario');
		const ingresarUsuario = inputIngresarElement.value;
		const url = `?view=usuario${encodeURI(ingresarUsuario)}`;
		window.location = url;
	};

	const ingresarElement = wrapperElement.querySelector('.inputHome-BotonIngresar');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputHome;
