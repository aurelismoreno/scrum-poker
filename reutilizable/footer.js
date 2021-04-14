const footer = () => {
	const template = `<footer class="footer-interno">Realizado por : Aurelis Moreno</footer>`;

	const footerElement = document.createElement('div');
	footerElement.classList.add('footer');
	footerElement.innerHTML = template;
	return footerElement;
};

export default footer;
