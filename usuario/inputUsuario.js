const inputUsuario = () => {
	const template = `
    <div class="input-interno">
        <h3>CREAR SALA</h3>
        <input id="inputUsuarioCrear" type="text" placeholder="Crear codigo de sala">
        <button class="input-botonCrear">CREAR</button>
        <br/>

        <h3>UNIRSE A UNA SALA </h3>
        <input id="inputUsuarioUnirse" type="text" placeholder="Ingrese codido de sala">
        <button class="input-botonUnirse">UNIRSE</button>
    </div>
  `;

	const wrapperElement = document.createElement('section');

	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputIngresarElement = wrapperElement.querySelector('#inputUsuarioUnirse');
		const ingresarUsuario = inputIngresarElement.value;
		  const url = `?view=sala${encodeURI(ingresarUsuario)}`;
		  window.location = url;
	};

	const ingresarElement = wrapperElement.querySelector('.input-botonUnirse');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputUsuario;
