import React from 'react';
import PropTypes from 'prop-types';

// Ha este componente le llega por prop el nombre que tendra que cargarse en la cabecera
const AppHeader = props => {
   return (
      <div>
         <div className="app-header">
            <h1>{props.title}</h1>
         </div>
      </div>
   );
};

AppHeader.propTypes = {
   title: PropTypes.string.isRequired,
};

export default AppHeader;