import {useParams, useNavigate} from "react-router-dom";
import {useState, useContext} from 'react';
import {useQuery} from '@tanstack/react-query';
import AdoptedPetContext from "./AdoptedPetContext";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); //para redirigir a la home page
    // eslint-disable-next-line no-unused-vars
    const [_, setAdoptedPet] = useContext(AdoptedPetContext);
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
                <h2>{pet.animal} — {pet.breed} — {pet.city}, {pet.state}
                    <button onClick={()=> setShowModal(true)}>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                    {
                        showModal ? 
                        (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {pet.name}?</h1>
                                    <div className="buttons">
                                        <button onClick={()=>{
                                            setAdoptedPet(pet);
                                            navigate("/");
                                        }}>Yes</button>
                                        <button onClick={() => setShowModal(false)}>No</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </h2>
            </div>
        </div>
    );
        
};
//agregar varias páginas
//npm i react-router-dom@6.4.1

function DetailsErrorBoundary(props){ //se hace de esta forma para que capte los errores que suceden fuera del return
    //se le pasa las props porque el error boundary las mata
    return (
        <ErrorBoundary>
            <Details {...props}/> 
        </ErrorBoundary>
    )
};

export default Details;