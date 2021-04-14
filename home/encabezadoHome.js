const encabezadoHome = () => {
	const template = `
	<div class="encabezadoHome-interno">
		<a href="?view=home" class="encabezadoHome-logo">SCRUM-POKER</a>
	</div>`;
	const headerElement = document.createElement('header');
	headerElement.classList.add('encabezadoHome');
	headerElement.innerHTML = template;
	return headerElement;
};

export default encabezadoHome;
