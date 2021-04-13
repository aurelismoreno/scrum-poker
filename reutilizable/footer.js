const footer = () => {
	const template = `<footer>Realizado por </footer>`;

	const footerElement = document.createElement('div');
	footerElement.classList.add('footer');
	footerElement.innerHTML = template;
	return footerElement;
};

export default footer;
