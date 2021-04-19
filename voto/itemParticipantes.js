const itemParticipantes = (dataParticipante) => {
    const template = `
    <div class="itemParticipantes-interno">
        <div>${dataParticipante.nombre}</div>
        <div>${dataParticipante.voto ? 'si' : 'no'}</div>
    </div>`;
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('itemParticipantes');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default itemParticipantes;