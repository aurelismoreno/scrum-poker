const subEncabezadoVoto= () => {
	const template = `
	<div class="subEncabezadoVoto-interno">
		<h3 class="subEncabezadoVoto-Sala">Sala</h3>
	</div>`;
	const subencabezadoElement = document.createElement('section');
	subencabezadoElement.classList.add('subEncabezadoVoto');
	subencabezadoElement.innerHTML = template;
	return subencabezadoElement;
};

export default subEncabezadoVoto;
