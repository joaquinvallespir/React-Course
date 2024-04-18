//una serie de caracteres que definen un patron de busqueda.
//buscan reemplazan y validan cadenas de texto
const text = 'Lorem ipsum dolor sit amet, lorem consectetur adipisicing lorem elit. Asperiores molestiae ipsam doloribus quod. Doloribus, veritatis tenetur eaque officiis tempore non aliquam, voluptatum aliquid, labore veniam quod repellendus nemo id quam.';

const regex = new RegExp('lorem', 'g');
const regex2 = /ipsum/;

//tiene ciertos parametros para especificar mejor las validaciones
//clases de caracteres, se encierra entre corchetes los caracteres o rango de caracteres que se quieren filtrar
const regex4= /fr[e3][e3] mon[e3]/i //valida free, fre3, fr33, freE, etc.
// \s chequea que no haya espacios antes o despues

const regex3= /lorem/i; //la i hace que sea case-insensitive (no diferencia entre may y min)
//la g hace que no se detenga en la primer coincidencia
//metodos mas comunes

//^ tiene doble funcionalidad, si se usa solo indica el comienzo del texto,
//^[a-z] ataja cualquier palabra que empiece con minuscula
//si se usa en una clase de caracteres, los ignora 
// [^\s] ignora si no hay un espacio al comienzo
console.log(regex.test(text));
console.log(regex2.test(text));
console.log(regex3.test(text)); //devuelve true o false si el texto contiene el patron
console.log(regex3.exec(text)); //devuelve un array con informacion sobre la/s coincidencia/S
console.log(regex.exec(text));