const subencabezadoUsuario = () => {
	const template = `
	<div class="subencabezadoUsuario-interno">
		<h3 class="encabezadoUsuario-Votar">Votar</h3>
		<h3 class="encabezadoUsuario-Sala">Sala</h3>
	</div>`;
	const subencabezadoElement = document.createElement('section');
	subencabezadoElement.innerHTML = template;
	return subencabezadoElement;
};

export default subencabezadoUsuario;
