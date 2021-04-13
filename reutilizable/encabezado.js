const encabezado = () => {
	const template = `
	<nav class="encabezadoHome-interno">
		<div>
			<a href="?view=home" class="encabezadoHome-logo">SCRUM-POKER</a>
		</div>
		
	</nav>`;
	const headerElement = document.createElement('header');
	headerElement.innerHTML = template;
	return headerElement;
};

export default encabezado;

