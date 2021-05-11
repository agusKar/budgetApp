import React, { useState, useEffect } from 'react';
import Presupuesto from './components/Presupuesto';
import FormGasto from './components/FormGasto';
import Gastos from './components/Gastos';
import ControlPresupuesto from './components/controlPresupuesto';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [gastos, guardarGastos] = useState([]);
  const [mostrarform, actualizarForm] = useState(true);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  useEffect( () =>{
    if(crearGasto){
      guardarGastos([...gastos , gasto]);
    }

    // Restar gasto de presupuesto
    const presupuestoRestado = restante - gasto.costoGasto;
    guardarRestante(presupuestoRestado);

    // Pasar a false el crear gasto
    guardarCrearGasto(false);

  },[gasto, gasto, crearGasto]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
            <header>
              <h1>Presupuesto</h1>
            </header>      
            <div className="contenido-principal">
              {
                mostrarform?
                (
                  <Presupuesto 
                    guardarPresupuesto = {guardarPresupuesto}
                    guardarRestante = {guardarRestante}
                    actualizarForm = {actualizarForm}
                  />
                )
                :
                (
                  <div className="row">
                    <div className="one-half column">
                      <FormGasto
                        guardarGasto={guardarGasto}
                        guardarCrearGasto={guardarCrearGasto}
                      />
                    </div>
                    <div className="one-half column">
                      <Gastos
                        gastos={gastos}
                      />
                      <ControlPresupuesto 
                        presupuesto = {presupuesto}
                        restante = {restante}
                      />
                    </div>
                  </div>
                )
              }

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
