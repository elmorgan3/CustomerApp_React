import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

// Este componente SIMPLE contiene el Com.AppHeader y le pasa el nombre que debera cargar

// Usamos el destructuring. Ya que aqui nos llega un objeto, que da igual su nombre
const AppFrame = ({header, body}) => {
   return (
      <div>
         <div className="app-frame">
            <AppHeader title={header}></AppHeader>
            <div>{body}</div>
            <div>Aplicaciób Simple de Ejemplo</div>
         </div>
      </div>
   );
};

AppFrame.propTypes = {
   header: PropTypes.string.isRequired,
   // Va a ser un elemeto reenderizable
   body: PropTypes.element.isRequired,
};

export default AppFrame;