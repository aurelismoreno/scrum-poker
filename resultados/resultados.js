const resultados = () => {
    const template = `<div class="resultados-interno">0.0</div>`;
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('resultados');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default resultados;