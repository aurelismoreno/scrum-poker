const subencabezadoResultados = () => {
    const template = `
    <div class="subencabezadoResultados-interno">
        <h3 class="subencabezadoResultados-Resultados">Resultados</h3>
        <h3 class="subencabezadoResultados-Sala">Sala</h3>
    </div>`;
    const wrapperElement = document.createElement('section');
    wrapperElement.classList.add('subencabezadoResultados');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default subencabezadoResultados;