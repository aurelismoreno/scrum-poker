
import listaResultados from '../resultados/listaResultados.js'
const participantesResultados = (arrayParticipantes) => {
    const template = `
    <div class="participantesResultados-interno">
        <div class="participantesResultados-subEncabezado">
            <h3 class="participantesResultados-Titulo1">Participantes</h3>
            <h3 class="participantesResultados-Titulo2">Puntuación</h3>
        </div>
        <div class="participantesVoto-Lista"></div>
    </div>`;
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('participantesResultados');
    wrapperElement.innerHTML = template;

    const insertarElement = wrapperElement.querySelector(".participantesVoto-Lista");
    insertarElement.appendChild(listaResultados(arrayParticipantes));

    return wrapperElement;
};

export default participantesResultados;