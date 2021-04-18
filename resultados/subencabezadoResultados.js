const subEncabezadoResultados = () => {
    const template = `
    <div class="subEncabezadoResultados-interno">
        <h3 class="subEncabezadoResultados-Resultados">Resultados</h3>
        <h3 class="subEncabezadoResultados-Sala">Sala</h3>
    </div>`;
    const wrapperElement = document.createElement('section');
    wrapperElement.classList.add('subEncabezadoResultados');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default subEncabezadoResultados;