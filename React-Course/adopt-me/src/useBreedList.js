//import {useState, useEffect} from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
//const localCache = {};
export default function useBreedList(animal) {
//recibe un animal
//si ya lo conoce lo saca del cache


   // const [breedList, setBreedList] = useState([]);
   // const [status, setStatus] = useState("unloaded"); //los estados de la carga de la lista

    /*  useEffect(() => {
        if(!animal){ //si no hay animal manda una lista vacía
            setBreedList([]);
        } else if (localCache[animal]) //si ya lo vi en el localcache, asigna lo que esta en local cache
        {
            setBreedList(localCache[animal]);
        }else
        {
            requestBreedList(); //hago la consulta
        }
        async function requestBreedList() //se define adentro del useEffect para que se ejecute solo una vez
        {
            setBreedList([]);
            setStatus("loading");
            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();
            localCache[animal] = json.breeds || []; //guarda el resultado en el cache para usarlo despues
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]); //el useEffect va a correr cada vez que cambia animal (array de dependencia)
 return [breedList, status]; */  

    const results = useQuery(["breedList", animal], fetchBreedList);
    return [results?.data?.breeds ?? [], results.status]; //si no tengo resultados dame un array vacio
    
}