import {useParams} from "react-router-dom"; 
import {useQuery} from '@tanstack/react-query';
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
const Details = () => {
    const {id} = useParams(); //capta el valor del id desde el url
    const results = useQuery(["details", id], fetchPet); //le paso la id y el nombre del lugar donde voy a guardar el cache. Si no tenes el elemento en los detalles, corre fetchPEt
    //no podes hacer un await en estas funciones de render
    
    if(results.isError)
    {
        return <h2>something went wrong</h2>;
    }
    
    if (results.isLoading) // si esta cargando en la  primera llamada 
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        ) 
//react query ejecuta el fetch a la api cuando se necesita y no cada vez que se carga la pagina
    const pet = results.data.pets[0];
    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>{pet.animal} — {pet.breed} — {pet.city}, {pet.state}</h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>
        </div>
    )
        
};
//agregar varias páginas
//npm i react-router-dom@6.4.1
export default Details;