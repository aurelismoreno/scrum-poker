const inputUsuarioUnirse = () => {
	const template = `
    <div class="inputUsuarioUnirse-interno">
		<form action="">
			<p>
				<label>Unirse a una Sala</label>
				<input id="inputUsuarioUnirse" type="text" name="Ingrese codido de sala" placeholder="Ingrese codido de sala">
			</p>
			<p class="block">
				<button class="inputUsuarioUnirse-botonUnirse">
					Unirse
				</button>
			</p>
		</form>
    </div>
  `;

	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('inputUsuarioUnirse');

	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputIngresarElement = wrapperElement.querySelector('#inputUsuarioUnirse');
		const ingresarUsuario = inputIngresarElement.value;
		  const url = `?view=voto${encodeURI(ingresarUsuario)}`;
		  window.location = url;
	};

	const ingresarElement = wrapperElement.querySelector('.inputUsuarioUnirse-botonUnirse');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputUsuarioUnirse;
