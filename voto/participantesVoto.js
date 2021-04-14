const participantesVoto = () => {
    const template = `
    <h3 class="participantesVoto-interno">Participantes</h3>`;
    const wrapperElement = document.createElement('section');
    wrapperElement.classList.add('participantesVoto');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default participantesVoto;