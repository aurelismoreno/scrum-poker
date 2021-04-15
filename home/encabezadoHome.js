const encabezadoHome = () => {
	const template = `
	<div class="encabezadoHome-interno">
		<a href="?view=home" class="encabezadoHome-logo">
			<h1 >Scrum<span>Poker</span></h1>
		</a>
	</div>`;
	const headerElement = document.createElement('header');
	headerElement.classList.add('encabezadoHome');
	headerElement.innerHTML = template;
	return headerElement;
};

export default encabezadoHome;
