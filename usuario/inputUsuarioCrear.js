const inputUsuarioCrear = () => {
	const template = `
    <div class="inputUsuarioCrear-interno">
		<form action="" class="inputHome-body">
			<label class="mb1">Crear Sala</label>
			<input class="mb1" id="inputUsuarioCrear" type="text" name="Crear codigo de sala"" placeholder="Crear codigo de sala">
			<button class="inputUsuarioCrear-botonCrear">Crear</button>
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
