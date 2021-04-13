const inputUsuario = () => {
	const template = `
    <div class="input-interno">
        <h3>CREAR SALA</h3>
        <input id="inputUsuario-Crear" type="text" placeholder="Crear codigo de sala">
        <button class="input-botonIngresar">CREAR</button>
        <br/>
        <h3>UNIRSE A UNA SALA </h3>
        <input id="inputUsuario-Ingresar" type="text" placeholder="Ingrese codido de sala">
        <button class="input-botonIngresar">UNIRSE</button>
    </div>
  `;

	const wrapperElement = document.createElement('section');

	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputIngresarElement = wrapperElement.querySelector('#inputUsuario');
		const ingresarUsuario = inputIngresarElement.value;
		//   const url = `?view=home&search=${encodeURI(tituloBuscar)}`;
		//   window.location = url;
	};

	const ingresarElement = wrapperElement.querySelector('.input-botonIngresar');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputUsuario;
