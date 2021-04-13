const inputHome = () => {
	const template = `
    <div class="input-interno">
        <h3>Usuario</h3>
        <input id="inputIngresar" type="text" placeholder="Ingrese usuario">
        <button class="input-Ingresar">Ingresar</button>
    </div>
  `;

	const wrapperElement = document.createElement('div');
	wrapperElement.classList.add('input-home');
	wrapperElement.innerHTML = template;

	const ingresarElementOnclick = (evt) => {
		evt.preventDefault();
		const inputIngresarElement = wrapperElement.querySelector('#inputIngresar');
		const ingresarUsuario = inputIngresarElement.value;
		const url = `?view=usuario${encodeURI(ingresarUsuario)}`;
		window.location = url;
	};

	const ingresarElement = wrapperElement.querySelector('.input-Ingresar');

	ingresarElement.addEventListener('click', ingresarElementOnclick);

	return wrapperElement;
};

export default inputHome;
