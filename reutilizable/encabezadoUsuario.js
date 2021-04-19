const encabezadoUsuario = (user) => {
	const template = `
	<nav class="encabezadoUsuario-interno">
		<a href="?" class="encabezadoUsuario-logo">
			<h1>ScrumPoker</h1>
		</a>
		<h3 class="encabezadoUsuario-Titulo">Usuario:${user.uid}</h3>
	</nav>`;
	const headerElement = document.createElement('header');
	headerElement.classList.add('encabezadoUsuario','layoutHeader');
	headerElement.innerHTML = template;

	return headerElement;
};

export default encabezadoUsuario;
