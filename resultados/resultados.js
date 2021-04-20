const resultados = (salaData) => {

    const template = `
    <div class="resultados-interno">${salaData.resultado}</div>`;
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('resultados');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default resultados;