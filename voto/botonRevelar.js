const botonRevelar = () => {
	const template = `
    <div class="botonRevelar-interno">
		<button class="botonRevelar-button" id="botonRevelarButton">Revelar</button>
    </div>`;
	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('botonRevelar');
	wrapperElement.innerHTML = template;

	//    COMPORTAMIENTO BOTON REVELAR
	const revelarElementOnclick = (evt) => {
		evt.preventDefault();
		const botonRevelarElement = wrapperElement.querySelector('#botonRevelarButton');
		const revelarResultados = botonRevelarElement.value;
		const url = `?view=resultados${encodeURI(revelarResultados)}`;
		window.location = url;
	};

	const revelarElement = wrapperElement.querySelector('.botonRevelar-button');

	revelarElement.addEventListener('click', revelarElementOnclick);

	return wrapperElement;
};

export default botonRevelar;
