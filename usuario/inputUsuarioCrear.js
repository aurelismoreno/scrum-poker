const inputUsuarioCrear = () => {
	const template = `
    <div class="inputUsuarioCrear-interno">
		<form action="">
			<p>
				<label>Crear Sala</label>
				<input id="inputUsuarioCrear" type="text" name="Crear codigo de sala"" placeholder="Crear codigo de sala">
			</p>
			<p class="block">
				<button class="inputUsuarioCrear-botonCrear">
					Crear
				</button>
			</p>
		</form>
    </div>
  `;

	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('inputUsuarioCrear');

	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputIngresarElement = wrapperElement.querySelector('#inputUsuarioCrear');
		const ingresarUsuario = inputIngresarElement.value;
		  const url = `?view=voto${encodeURI(ingresarUsuario)}`;
		  window.location = url;
	};

	const ingresarElement = wrapperElement.querySelector('.inputUsuarioCrear-botonCrear');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputUsuarioCrear;
