const encabezadoUsuario = () => {
	const template = `
	<nav class="encabezadoUsuario-interno">
		<a href="?view=home" class="encabezadoUsuario-logo">
			<h1>ScrumPoker</h1>
		</a>
		<h3 class="encabezadoUsuario-Titulo">Usuario</h3>
	</nav>`;
	const headerElement = document.createElement('header');
	headerElement.classList.add('encabezadoUsuario');
	headerElement.innerHTML = template;

	return headerElement;
};

export default encabezadoUsuario;
