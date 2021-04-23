import listaParticipantes from './listaParticipantes.js'

const subEncabezadoParticipantes = (arrayParticipantes) => {
    const template = `
    <div class="subEncabezadoParticipantes-interno">
        <div class="subEncabezadoParticipantes-subEncabezado">
            <h3 class="subEncabezadoParticipantes-Titulo">Participantes</h3>
            <h3 class="subEncabezadoParticipantes-Titulo">Voto</h3>
        </div>
        <div class="subEncabezadoParticipantes-Lista"></div>
    </div>`;
    const wrapperElement = document.createElement('section');
    wrapperElement.classList.add('subEncabezadoParticipantes');
    wrapperElement.innerHTML = template;

    const insertarElement = wrapperElement.querySelector(".subEncabezadoParticipantes-Lista");
    insertarElement.appendChild(listaParticipantes(arrayParticipantes));

    return wrapperElement;
};

export default subEncabezadoParticipantes;