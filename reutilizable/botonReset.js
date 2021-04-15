const botonReset = () => {
	const template = `
    <div class="botonReset-interno">
		<button class="botonReset-button" id="botonResetButton">Reset</button>
    </div>`;
	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('botonReset');
	wrapperElement.innerHTML = template;

	//  COMPORTAMIENTO BOTON RESET
    const resetElementOnclick = (evt) => {
		evt.preventDefault();
		const botonResetElement = wrapperElement.querySelector('#botonResetButton');
		const resetResultados = botonResetElement.value;
		const url = `?view=voto${encodeURI(resetResultados)}`;
		window.location = url;
	};

	const resetElement = wrapperElement.querySelector('.botonReset-button');

	resetElement.addEventListener('click', resetElementOnclick);

	return wrapperElement;
};

export default botonReset;