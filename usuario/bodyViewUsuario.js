import inputUsuarioCrear from './inputUsuarioCrear.js'
import inputUsuarioUnirse from './inputUsuarioUnirse.js'

const bodyViewUsuario = () => {
    const wrapperElement = document.createElement('div');

    wrapperElement.classList.add('bodyViewUsuario','layoutBody');

    wrapperElement.appendChild(inputUsuarioCrear());
	wrapperElement.appendChild(inputUsuarioUnirse());

    return wrapperElement;
};

export default bodyViewUsuario;

