// todo esto es JSX

// JSX como expresión
// function getUserName(name){
//   if(name){
//     return <h1>Hello {formatName(name)}</h1>
//   }
//   return <h1>Hello mitzi</h1>
// }

// tipos de componentes 
/* 
  componentes funcionales

  function welcome(props){
    return <h1>Hello {props.name}</h1>
  }

  son mas utilizados y mas corto
*/


/* 
  componentes de clases

  class welcome extends React.Component{
    render(){
      return <h1>Hello. {this.props.name}</h1>
    }
  }

  cada vez se usan menos
*/

// especificando atributos
// const element = <div className='header' />;


// componente funcionales
// const Container = () =>{
//   return (
//     // <div className="App">
//     //   {/* <div className="App-header"> */}
//         {image}
//         // {heart}
//         // <p>
//         //   {welcome}
//         //   {love}
//         // </p>
//         // <p>
//         //   {love} Mitzi 😍
//         // </p>
//         // <h1><b><i>Te amo más corazón 😘</i></b></h1>
//     //   </div>
//     // </div>
//   );
// }

// const nombre = "Joss VN";
// const welcome = <h1>Hello Mitzi, I'm {nombre}</h1>;
// const love = "Te amo :3";

// export default function Lov() {
//     return (
//         <p>
//             {welcome}
//             {love} <br/>
//             {love} Mitzi 😍
//             <h1><b><i>Te amo más corazón 😘</i></b></h1>
//         </p>
//     );
// }

// usando props
// export default function Lov(props) {
//     let {nombre, mensaje, love} = props;
//     return (
//         <p>
//             <h1>{mensaje} {nombre}</h1>
//             {love} <br/>
//             {love} Mitzi 😍
//             <h1><b><i>Te amo más corazón 😘</i></b></h1>
//         </p>
//     );
// }

// Los hooks son una nueva incorporacion de react a partir de la version 16.8
// Es una funcion que puede guaradr los estados de los componentes

// importacion de hooks
import { useState,useEffect } from "react";

export default function Lov(props){
    // Usestate
    // Acepta el valor inicial y poder modificarlo dinamicamente sin escribir una clase
    const [counter, setCounter] = useState(0);
    // Useefect
    // Efectos secundarios en componentes funcionales
    const [semaforo, setSemaforo] = useState(true);
    // proposiciones
    const {mensaje,name} = props;

    const contar = () => {
        setCounter(counter+1);
        setSemaforo(!semaforo);
    }

    useEffect(() =>{
        console.log(semaforo);
    }, [semaforo]);

    return(
        <>
            <p> {mensaje} </p>
            <p> hola soy {name} </p>
            <h1>Contador de React con hooks</h1>
            <h4>El numero del contador es {counter}</h4>
            <p>Mi corazon esta en color {semaforo  ? "💜" : "💚"}</p>
            <button type="submit" onClick={contar}>Sumar contador</button>
        </>
    );
}