const encabezadoHome = () => {
	const template = `
	<nav class="encabezadoHome-interno">
		<a href="?view=home" class="encabezadoHome-logo">SCRUM-POKER</a>
	</nav>`;
	const headerElement = document.createElement('header');
	headerElement.innerHTML = template;
	return headerElement;
};

export default encabezadoHome;
