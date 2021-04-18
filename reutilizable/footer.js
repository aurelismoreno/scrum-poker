const footer = () => {
	const template = `
	<footer class="footer-interno">
		@Aurelis Moreno
	</footer>`;

	const footerElement = document.createElement('div');
	footerElement.classList.add('footer','layoutFooter');
	footerElement.innerHTML = template;
	return footerElement;
};

export default footer;
