const input = () => {
	const template = `
    <div class="input-interno">
        <h3>Usuario</h3>
        <input id="inputUsuario" type="text" placeholder="Ingrese usuario">
        <button class="input-botonIngresar">Ingresar</button>
    </div>
  `;

	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('input');
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

export default input;
