import Pet from "./Pet"
//este archivo se encarga de mostrar los pets para segmentar mejor las tareas   
const Results = ({pets}) => {
    console.log(pets.breed);
    return (
        <div className = 'search'>
            {
                !pets.length ? (
                    <h1>No pets found</h1>
                )
        : (
            pets.map((pet) => (
                <Pet
                    
                    animal={pet.animal}
                    id={pet.id}
                    name={pet.name}
                    breed={pet.breed}
                    images={pet.images}
                    location={`${pet.city}, ${pet.state}`}
                    key={pet.id}
                /> 
            ))
            )   
            }           
        </div>
    )
}
export default Results;