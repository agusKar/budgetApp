import React, {Fragment, useState} from 'react';
import shortid from 'shortid';

const FormGasto = ({guardarGasto, guardarCrearGasto}) => {

    const [ gasto, cargarGasto ] = useState({
        NameGasto: '',
        costoGasto: 0,
        id: 0
    });

    // Definimos el nombre del gasto
    const definirGasto = e => {
        let gastoFiltrado = 0;
        
        if(e.target.name == "costoGasto"){
            gastoFiltrado = parseInt(e.target.value, 10);
        }else{
            gastoFiltrado = e.target.value;
        }
        cargarGasto({
            ...gasto,
                [e.target.name]: gastoFiltrado,
                id: shortid.generate()
        });
    }
    const agregarGasto = e => {
        e.preventDefault();

        // Guardamos el gasto
        guardarGasto(gasto);

        // Resetear Form
        cargarGasto({
            NameGasto: '',
            costoGasto: 0,
            id: 0
        })

        //
        guardarCrearGasto(true);
    }

    return ( 
        <Fragment>
            <form
                onSubmit={agregarGasto}>
                <label htmlFor="gasto">Gasto</label>
                <input 
                    name="NameGasto"
                    type="text"
                    value={gasto.NameGasto}
                    onChange={definirGasto}
                    required
                    placeholder="Ej. Compra viveres"
                    className="u-full-width" />
                <input 
                    name="costoGasto"
                    type="number"
                    required
                    value={gasto.costoGasto}
                    placeholder="Ej. 500"
                    className="u-full-width"
                    onChange={definirGasto} />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Cargar gasto"
                />
            </form>
        </Fragment>
     );
}
 
export default FormGasto;