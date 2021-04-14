const itemParticipantes = () => {
    const template = `
    <h3 class="itemParticipantes">Participantes</h3>`;
    const wrapperElement = document.createElement('section');
    wrapperElement.classList.add('itemParticipantes');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default itemParticipantes;