const inputHome = () => {
	const template = `
    <div class="inputHome-interno">
		<form action="">
			<p>
				<label>Usuario</label>
				<input id="inputHomeUsuario" type="text" name="usuario" placeholder="Ingrese usuario">
			</p>
			<p class="block">
				<button class="inputHome-BotonIngresar">
					Ingresar
				</button>
			</p>
		</form>
    </div>
  `;

	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('inputHome');
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
