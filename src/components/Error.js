import React from 'react';


const Error = ({mensaje}) => {
    return ( 
        <div className="alert alert-danger eroor">{mensaje}</div>
     );
}
 
export default Error;