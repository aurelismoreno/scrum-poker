const inputUsuarioCrear = () => {
	const template = `
    <div class="inputUsuarioCrear-interno">
        <h3 class="inputUsuarioCrear-titulo">CREAR SALA</h3>
        <input id="inputUsuarioCrear" type="text" placeholder="Crear codigo de sala">
        <button class="inputUsuarioCrear-botonCrear">CREAR</button>
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
