import React from "react";
import { Link } from "react-router-dom"; //el link hace que no recargue la pagina al cambiar de directorio
/*const Pet = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
    ]);
  };*/

const Pet = (props) => {
  const {name, animal, breed, images, location, id} = props
  console.log(props);
  console.log(props.key);
  console.log(id);
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if(images.length) {
    hero = images[0];
  } 
  return(
        <Link to={`/details/${id}`} className="pet">
          <div className="image-container"> 
            <img src={hero} alt={name} />
          </div>
          <div className="info">
            <h1>{name}</h1>
            <h2>
              {animal} — {breed} — {location}
            </h2>
          </div>
        </Link>
    );
};

export default Pet;