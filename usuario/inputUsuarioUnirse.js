const inputUsuarioUnirse = () => {
	const template = `
    <div class="inputUsuarioUnirse-interno">
        <h3 class="inputUsuarioUnirse-titulo">UNIRSE A UNA SALA </h3>
        <input id="inputUsuarioUnirse" type="text" placeholder="Ingrese codido de sala">
        <button class="inputUsuarioUnirse-botonUnirse">UNIRSE</button>
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
