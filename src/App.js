import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  const [citas, saveCitas] = useState([]);

  // funcion que tome las citas

  const crearCita = cita => {
    saveCitas([
      ...citas,
      cita
    ]);
  }

  const deleteCita = id => {
    const nuevaCita = citas.filter(cita => cita.id !== id);

    saveCitas(nuevaCita);
  }

  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
              <h1>Citas</h1>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                deleteCita={deleteCita}
                 />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
