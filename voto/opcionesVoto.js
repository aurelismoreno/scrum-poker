const opcionesVoto = () => {
    const template = `
    <div class="opcionesVoto-interno">
    <button>0</button>
    <button>1/2</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>5</button>
    <button>8</button>
    <button>13</button>
    <button>21</button>
    <button>?</button>
    <button>∞</button>
    </div>`;
    const wrapperElement = document.createElement('section');
    wrapperElement.classList.add('opcionesVoto');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default opcionesVoto;