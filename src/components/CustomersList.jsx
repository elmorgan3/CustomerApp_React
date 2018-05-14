import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

// Este componente contiene un lista de todos los cliente,
// para ello hacemos un map de de una array que nos llegara
// por prop y por cada iteracion del array crearemos un 
// componente del tipo CustomerListItem. Al cual tenemos 
// que pasarle todos los parametros que espera recibir.
const CustomersList = ({ customers, urlPath }) => {
   return (
      <div className="customers-list">
         {
            // IMPORTANTE cuando generamos instancias de un componete de un map, es esencial ponerle un valor como KEY
            customers.map(c =>
               <CustomerListItem
                  key={c.dni}
                  dni={c.dni}
                  name={c.name}
                  editAction={'Editar'}
                  deleteAction={'Eliminar'}
                  urlPath={urlPath}
               ></CustomerListItem>
            )
         }
      </div>
   );
};

CustomersList.propTypes = {
   customers: PropTypes.array.isRequired,
   urlPath: PropTypes.string.isRequired,
};

export default CustomersList;