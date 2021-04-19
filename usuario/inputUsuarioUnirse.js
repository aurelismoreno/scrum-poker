const inputUsuarioUnirse = () => {
	const template = `
    <div class="inputUsuarioUnirse-interno">
		<form action="" class="inputHome-body">
			<label class="mb1">Unirse a una Sala</label>
			<input class="mb1"id="inputUsuarioUnirse" type="text" name="Ingrese codido de sala" placeholder="Ingrese codido de sala">
			<button class="inputUsuarioUnirse-botonUnirse">Unirse</button>
		</form>
    </div>
  `;

	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('inputUsuarioUnirse');

	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputIngresarElement = wrapperElement.querySelector('#inputUsuarioUnirse');
		const numeroSala = inputIngresarElement.value;
		  const url = `?sala=${encodeURI(numeroSala)}`;
		  window.location = url;
	};

	const ingresarElement = wrapperElement.querySelector('.inputUsuarioUnirse-botonUnirse');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputUsuarioUnirse;
