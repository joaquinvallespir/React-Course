import Pet from "./Pet"
//este archivo se encarga de mostrar los pets para segmentar mejor las tareas   
const Results = ({pets}) => {

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
                    name={pet.name}
                    breed={pet.breed}
                    image={pet.images}
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