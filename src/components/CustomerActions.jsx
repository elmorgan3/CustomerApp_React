import React from 'react';
import PropTypes from 'prop-types';

// Este componente recibira elementos de tipo nodo, que son reenderizables
const CustomerActions = ({ children }) => {
   return (
      <div>
         <div className="customers-actions">
            <div>{children}</div>
         </div>
      </div>
   );
};

CustomerActions.propTypes = {
   children: PropTypes.node.isRequired,
};

export default CustomerActions;