import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Este componente tiene el nombre del customer y dos link una para edirtar y el otro para borrar
const CustomerListItem = ({ name, editAction, deleteAction, urlPath, dni }) => {
   return (
      <div className="customers-list-item">
         <div className="field">
            <Link to={`${urlPath}${dni}`}>{name}</Link>
         </div>
         <div className="field">
            <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
         </div>
         <div className="field">
            <Link to={`${urlPath}${dni}/delete`}>{deleteAction}</Link>
         </div>
      </div>
   );
};

CustomerListItem.propTypes = {
   name: PropTypes.string.isRequired,
   editAction: PropTypes.string.isRequired,
   deleteAction: PropTypes.string.isRequired,
   urlPath: PropTypes.string.isRequired,
   dni: PropTypes.string.isRequired,
};

export default CustomerListItem;