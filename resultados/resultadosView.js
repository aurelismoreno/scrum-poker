import encabezadoUsuario from '../reutilizable/encabezadoUsuario.js';


const resultadosView = () => {
    const wrapperElement = document.createElement('div');

    wrapperElement.classList.add('resultadosView');
    wrapperElement.appendChild(encabezadoUsuario());

    return wrapperElement;
};

export default resultadosView;
