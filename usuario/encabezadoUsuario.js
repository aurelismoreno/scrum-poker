const encabezadoUsuario = () => {
	const template = `
	<nav class="encabezadoUsuario-interno">
		<a href="?view=home" class="encabezadoUsuario-logo">SCRUM-POKER</a>
		<h3 class="encabezadoUsuario-Usuario">Usuario</h3>
	</nav>`;
	const headerElement = document.createElement('header');
	headerElement.classList.add('encabezadoUsuario');
	headerElement.innerHTML = template;

	return headerElement;
};

export default encabezadoUsuario;
