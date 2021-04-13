const footer = () => {
	const template = `<footer>Realizado por : Aurelis Moreno</footer>`;

	const footerElement = document.createElement('div');
	footerElement.classList.add('footer');
	footerElement.innerHTML = template;
	return footerElement;
};

export default footer;
