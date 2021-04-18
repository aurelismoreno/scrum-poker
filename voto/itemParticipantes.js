const itemParticipantes = () => {
    const template = `
    <div class="itemParticipantes-interno">
        <div>Aurelis</div>
        <div>Si</div>
    </div>`;
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('itemParticipantes');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default itemParticipantes;