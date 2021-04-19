const itemResultados = (dataParticipante) => {
    const template = `
    <div class="itemResultados-interno">
        <div>${dataParticipante.nombre}</div>
        <div>${dataParticipante.puntuacion}</div>
    </div>`;
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('itemResultados');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default itemResultados;