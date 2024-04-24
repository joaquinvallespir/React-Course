import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component { // hacerlo con class component
    state = { hasError: false };
    static getDerivedStateFromError() //los metodos static se llaman directamente desde la clase sin instanciarla
    {   //esto se lo mandarias a un tracker te errores como TrackJS o NewRelic
        return { hasError: true }; //similar a setState
    }

    componentDidCatch(error, info){
        console.error("ErrorBoundary component caught an error", error, info);
    }

    render(){
        if(this.state.hasError){ //si hay un error mostrar esto con un link para volver
            return (
                <h2>
                    There was an error with this listing. <Link to="/">Click here to go back to the home page.</Link>
                </h2>
            )
        }   
        return this.props.children; //si no hay un error que pase normalmente
    }
}

export default ErrorBoundary;