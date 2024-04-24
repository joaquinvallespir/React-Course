import {useEffect, useRef} from 'react';
import { createPortal} from 'react-dom';

const Modal = ({children}) => { //se muestra solo si recibe un hijo
    const elRef = useRef(null) //sirve pára crear el mismo div y no crear siempre uno nuevo // es un contenedor que te da siempre la misma cosa una vez
    if (!elRef.current){
        elRef.current = document.createElement('div');
    }
    useEffect(()=> {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);
        return () => modalRoot.removeChild(elRef.current);//retorna esto cuando el componente se desmonta del DOM
    }, []);
    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;