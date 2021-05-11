import React, { Fragment, useState } from 'react';
import Error from './Error';

const Presupuesto = ({guardarPresupuesto, guardarRestante, actualizarForm}) => {

    // Creamos el state de Presupuesto
    const [presupuesto, cargarPresupuesto] = useState(0);
    const [error, cargarError] = useState(false);

    // Definimos el presupuesto
    const definirPresupuesto = e => {
        cargarPresupuesto(parseInt(e.target.value, 10));
    }

    // Agregamos el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if(presupuesto < 1 || isNaN(presupuesto)){
            cargarError(true);
            return;
        }
        cargarError(false);

        // agregar presupuesto
        guardarPresupuesto(presupuesto);
        guardarRestante(presupuesto);
        actualizarForm(false);
    }
    return(
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            
            { (error)? 
                <Error mensaje="Hubo un error"/>
                : 
                null 
            }
            

            <form
                onSubmit={agregarPresupuesto}
            >
                <label 
                    htmlFor="input_presupuesto" 
                    className="u-full-width">Ingrese su presupuesto</label>
                <input 
                    id="input_presupuesto"
                    name="presupuesto"
                    type="number" 
                    min="1"
                    className="u-full-width" 
                    placeholder="Ingrese su presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
    );
}
 
export default Presupuesto;