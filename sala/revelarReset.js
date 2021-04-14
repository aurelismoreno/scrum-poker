const revelarReset = () => {
    const template = `
    <div class="revelarReset">
    <button>Revelar</button>
    <button>Reset</button>
    </div>`;
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('revelarReset');
    wrapperElement.innerHTML = template;

    return wrapperElement;
};

export default revelarReset;