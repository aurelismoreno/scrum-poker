import inputUsuarioCrear from './inputUsuarioCrear.js'
import inputUsuarioUnirse from './inputUsuarioUnirse.js'
import inputHome from './inputHome.js'

const bodyViewUsuario = (user) => {
    const wrapperElement = document.createElement('div');

    wrapperElement.classList.add('bodyViewUsuario','layoutBody');
    wrapperElement.appendChild(inputHome());

    wrapperElement.appendChild(inputUsuarioCrear(user));
	wrapperElement.appendChild(inputUsuarioUnirse());

    return wrapperElement;
};

export default bodyViewUsuario;

