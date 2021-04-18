import listaParticipantes from '../voto/listaParticipantes.js'

const participantesVoto = () => {
    const template = `
    <div class="participantesVoto-interno">
        <div class="participantesVoto-subEncabezado">
            <h3 class="encabezadoUsuario-Titulo">Participantes</h3>
            <h3 class="encabezadoUsuario-Titulo">Voto</h3>
        </div>
        <div class="participantesVoto-Lista"></div>
    </div>`;
    const wrapperElement = document.createElement('section');
    wrapperElement.classList.add('participantesVoto');
    wrapperElement.innerHTML = template;

    const insertarElement = wrapperElement.querySelector(".participantesVoto-Lista");
    insertarElement.appendChild(listaParticipantes());

    return wrapperElement;
};

export default participantesVoto;