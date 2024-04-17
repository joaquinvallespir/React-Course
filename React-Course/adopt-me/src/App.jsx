//REACT NO SE SUELE ESCRIBIR ASÏ SE USA JSX

// -----------------npm y prettier------------------------- 
//Prettier resuelve problemas de formato
//npm init -y
//instalar prettier npm install --save-dev prettier@2.7.1 / npm i -D prettier@2.7.1
// crear archivo .prettierrc en carpeta raiz
// settings -> editor -> formatOnSave = true
//extension prettier
// settings -> prettier -> requireConfig = true  / sirve para cuando tenes un archivo que no usa prettier y no queres que se formatee y se rompa todo
// agregar al package.json -> "format": "prettier --write \"src/**/*.{js,jsx}\"", en "scripts" / chequear bien la ruta del proyecto porque puede ser otra
//terminal npm run format
//si hay algun error te fijas en problemas o en output y seleccionas la consola prettier, a mi no me anda no se por que wexd
//---------------------------------------------------------

//--------------------ESLint & GIT-------------------------
//ESLint resuelve problemas basicos de javascript
//npm install --save-dev eslint@8.24.0 eslint-config-prettier@8.5.0 / npm i -D eslint@8.24.0 eslint-config-prettier@8.5.0
// crear archivo .eslintrc.json en carpeta raiz
//ver el archivo de ejemplo para configurarlo
//instalar ESLint extension de vscode
// agregar al package.json -> "lint": "eslint \"src/**/*.{js,jsx}\" --quiet", en scripts / chequear bien la ruta del proyecto porque puede ser otra
// npm run lint pero va a tirar errores
// npm run lint -- --debug / el -- le pasa el debug a otro lado no al lint y tira mas detalles
// crear archivo .gitignore en carpeta raiz y usar el de ejomplo para configurarlo
//--------------------VITE--------------------------------
// es una build tool
// npm i -D vite@3.1.4 @vitejs/plugin-react@2.1.0
// cambiar todo a jsx
// crear archivo vite.config.js en la carpeta raiz
// ver el archivo de ejemplo para configurarlo
// npm i react@18.2.0 react-dom@18.2.0
// agregar al package.json -> "dev": "vite",
// "build": "vite build",
// "preview": "vite preview
// npm run dev
//--------------------ESLint & React-------------------------
// npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8
// revisar https://react-v8.holt.courses/lessons/core-react-concepts/jsx  para configurar .eslintrc.json
// npm run lint

//react tiene un concepto: one way data flow => puedo pasar datos de app(padre) a pet(hijo)
//pero no de pet(hijo) a app(padre) el 99% de las veces
//simplifica el debugging. si app le pasa un error a pet es mas facil localizarlo porque pet no puede causar un error en app solo en pet.

//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
//podes importar partes de paquetes (supuestamente es lo que se tiene que hacer) ejemplo: import { createRoot} from "react-dom";
//hacerlo de esta forma Vite hace que no se importen cosas que no se usan.
import SearchParams from "./SearchParams";
const App = () => {
  return(
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
  )
}//es necesario usar capitalizacion para crear un componente y si o si usar el self closing tag
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
