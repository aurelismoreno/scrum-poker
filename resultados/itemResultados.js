const itemResultados = () => {
    const template = `
    <div class="itemResultados-interno">
        <div>Aurelis</div>
        <div>0.0</div>
    </div>`;
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('itemResultados');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default itemResultados;