//import { useState, useEffect } from "react"; // los effect hacen conexiones con el exterior del componente para traer informacion / API request o localstorage request
import { useState, useContext} from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import AdoptedPetContext from "./AdoptedPetContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
   // const [pets, setPets] = useState([]);
   // const [location, setLocation] = useState(""); //creo la variable y su metodo set
    /*      const locationHook = useState("");
            const location = locationHook[0];
            const setLocation = locationHook[1]; 
    */
    //no crear variables dentro de condicionales o loops porque alteran el orden del estado de react
    //despues le asigno el valor del campo input usando el metodo set que cree antes onChange={(e) => setLocation(e.target.value)} 
    //npm install -D eslint-plugin-react-hooks@4.6.0 esto asegura que uses bien los hooks
    //agregar "plugin:react-hooks/recommended", al .eslintrc.json
    
    const [animal, setAnimal] = useState("");
   // const [breed, setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    const [adoptedPet] = useContext(AdoptedPetContext);
    console.log(breeds);
//el effect corre cada vez que se actualiza el componente
//// requestPets();
// eslint-disable-next-line react-hooks/exhaustive-deps 
//}, []); //le paso un array de dependencias vacio para que se corra solo una vez // tambien se le puede pasar uno o varios componente para que corra cada vez que cambia ese componente
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });
/*async function requestPets()
{
    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}` //esta es la conexion con la API o sea el backend // agarra los valores de los inputs y trae los animales que corresponden 
    );
    const json = await res.json(); // guardo el json de la consulta
    setPets(json.pets); //guardo los pets del json en el array
}*/
    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];
    return ( //se pone className en vez de class porque javascript la tiene reservada para crear clases
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault() //evita que se recargue la pagina al apretar submit
                const formData = new FormData(e.target); //agarra todos los datos del form y los pone en un objeto
                const obj = {
                    animal: formData.get("animal") ?? "",
                    breed: formData.get("breed") ?? "",
                    location: formData.get("location") ?? "",
                };
                setRequestParams(obj);
                }}>
                    {
                        adoptedPet ? (
                            <div className="pet image-container">
                                <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                            </div>
                        ) : null
                    }
                <label htmlFor="location"> 
                    Location
                    <input 
                    name="location"
                    id="location" 
                    placeholder="Location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                        <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            }}
                        >
                            <option />
                            {ANIMALS.map((animal) => ( //recorro el array ANIMALS y me crea un componente option para cada uno
                                <option key={animal}>{animal}</option>
                            ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        disabled={breeds.length === 0 //desactiva el select si no hay razas
                    }
                        name="breed">
                            <option />
                            {breeds.map((breed) => ( //recorro el array ANIMALS y me crea un componente option para cada uno
                                <option key={breed}>{breed}</option>
                            ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>{console.log(pets)}
                <Results pets={pets}/>
                {/*
                pets.map(pet =>(
                    <Pet 
                    name={pet.name} 
                    animal={pet.animal} 
                    breed={pet.breed} 
                    key={pet.id} //agrego el id como key para que react no se confunda cuando se quiera filtrar por otros campos
                    />
                ))
           */ }
        </div>
    )
}
//htmlFor lo mismo que con el for de javascript
export default SearchParams;