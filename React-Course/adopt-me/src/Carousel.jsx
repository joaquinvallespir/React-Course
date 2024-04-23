import { Component } from "react";
//class components
class Carousel extends Component {
    state = {
        active: 0 //la foto activa por defecto
    }
    static defaultProps = {
        images: ["http://pets-v2.dev-apis.com/pets/none.jpg"] //placeholder
    }

    handleIndexClick = (e) =>{ //se usa una funcion flecha porque captura el contexto del evento
        this.setState({
            active: +e.target.dataset.index //el + convierte el string del index en un numero
        })
    }
    render (){ //render  es obligatorio para cada class component
        const { active} = this.state //equivalente a useState
        const { images} = this.props //props son los parametros que se pasan al llamar la funcion, equivalente a useParams()
        return (
            <div className='carousel'>
                <img src={images[active]} alt="animal hero"/>
                <div className='carousel-smaller'>
                    {images.map((photo, index) => (
                    // eslint-disable-next-line
                    <img
                        onClick={this.handleIndexClick}
                        data-index={index}
                        key={photo}
                        src={photo}
                        className={index === active ? "active": ""}
                        alt="animal thumbnail"
                    />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel