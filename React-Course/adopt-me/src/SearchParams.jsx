import { useState, useEffect } from "react"; // los effect hacen conexiones con el exterior del componente para traer informacion / API request o localstorage request
import Pet from "./Pet";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
    const [pets, setPets] = useState([]);
    const [location, setLocation] = useState(""); //creo la variable y su metodo set
    /*      const locationHook = useState("");
            const location = locationHook[0];
            const setLocation = locationHook[1]; 
    */
    //no crear variables dentro de condicionales o loops porque alteran el orden del estado de react
    //despues le asigno el valor del campo input usando el metodo set que cree antes onChange={(e) => setLocation(e.target.value)} 
    //npm install -D eslint-plugin-react-hooks@4.6.0 esto asegura que uses bien los hooks
    //agregar "plugin:react-hooks/recommended", al .eslintrc.json
    
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = useBreedList(animal);
    
    console.log(breeds);
//el effect corre cada vez que se actualiza el componente
useEffect(() =>{
    requestPets();
// eslint-disable-next-line react-hooks/exhaustive-deps 
}, []); //le paso un array de dependencias vacio para que se corra solo una vez // tambien se le puede pasar uno o varios componente para que corra cada vez que cambia ese componente

async function requestPets()
{
    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}` //esta es la conexion con la API o sea el backend // agarra los valores de los inputs y trae los animales que corresponden 
    );
    const json = await res.json(); // guardo el json de la consulta

    setPets(json.pets); //guardo los pets del json en el array
}

    return ( //se pone className en vez de class porque javascript la tiene reservada para crear clases
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault() //evita que se recargue la pagina al apretar submit
                requestPets();
                }}>
                <label htmlFor="location"> 
                    Location
                    <input onChange={(e) => setLocation(e.target.value)} 
                    id="location" 
                    value={location} 
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
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        >
                            <option />
                            {breeds[0].map((breed) => ( //recorro el array ANIMALS y me crea un componente option para cada uno
                                <option key={breed}>{breed}</option>
                            ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet =>(
                    <Pet 
                    name={pet.name} 
                    animal={pet.animal} 
                    breed={pet.breed} 
                    key={pet.id} //agrego el id como key para que react no se confunda cuando se quiera filtrar por otros campos
                    />
                ))
            }
        </div>
    )
}
//htmlFor lo mismo que con el for de javascript
export default SearchParams;