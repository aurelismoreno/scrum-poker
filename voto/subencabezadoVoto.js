const subencabezadoVoto= () => {
	const template = `
	<div class="subencabezadoVoto-interno">
		<h3 class="subencabezadoVoto-Votar">Votar</h3>
		<h3 class="subencabezadoVoto-Sala">Sala</h3>
	</div>`;
	const subencabezadoElement = document.createElement('section');
	subencabezadoElement.classList.add('subencabezadoVoto');
	subencabezadoElement.innerHTML = template;
	return subencabezadoElement;
};

export default subencabezadoVoto;
