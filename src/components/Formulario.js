import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4';

const Formulario = ({crearCita}) => {

//Crear State

  const [cita, updateCita] = useState({
    mascota: '',
    dueno: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  //funcion de tomar  input


  const actualizarState = e =>{
  updateCita({
    ...cita,
    [e.target.name]: e.target.value
  });
  }

  const [error, updateError] = useState(false);

  //const para obtener cirta

const  {mascota,dueno,fecha,hora,sintomas} = cita;



  //submit form

  const submitCita = e => {
    e.preventDefault();


    //varlidar
    if (mascota.trim() === '' || dueno.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      updateError(true);
      return;
    }
    //validado

    updateError(false);

    //asignar id

    cita.id = uuid();
    console.log(cita);

    //crear cita
    crearCita(cita);

    //reset

    updateCita({
      mascota: '',
      dueno: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });

  }

return(
  <Fragment>
    <h2>Crear cita</h2>

  {error ? <p className="alerta-error">Por Favor llena todos los campos</p> : null}

    <form
      onSubmit={submitCita}
      >
      <label>Nombre Mascota</label>
      <input
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Colocar nombre mascota"
        onChange={actualizarState}
        value={mascota}
         />

       <label>Nombre del dueno</label>
         <input
           type="text"
           name="dueno"
           className="u-full-width"
           placeholder="Coloca el nombre del dueno"
           onChange={actualizarState}
           value={dueno}
            />

          <label>Fecha de alta</label>
            <input
              type="date"
              name="fecha"
              className="u-full-width"
              onChange={actualizarState}
              value={fecha}
               />

             <label>Hora de alta</label>
                 <input
                   type="time"
                   name="hora"
                   className="u-full-width"
                   onChange={actualizarState}
                   value={hora}
                    />

                  <label>Sintomas</label>
                    <textarea
                      name="sintomas"
                      className="u-full-width"
                      onChange={actualizarState}
                      value={sintomas}
                     >

                    </textarea>

                      <button
                        type="submit"
                        className="u-full-width button-primary"
                      >
                      Agregar
                      </button>

    </form>
  </Fragment>
);

}
export default Formulario;
