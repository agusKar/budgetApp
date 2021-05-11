import React from 'react';


const Gasto = ({gasto}) => ( 
   <li>
       <p>
           {gasto.NameGasto}
           <span className="gasto">$ {gasto.costoGasto}</span>
       </p>
   </li>
);
 
export default Gasto;