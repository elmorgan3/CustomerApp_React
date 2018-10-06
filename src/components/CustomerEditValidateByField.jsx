
// ESTE COMPONENTE NO SE ESTA USANDO Y LO SUSTITUYE EL CustomerEdit

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';

// Este método comprueba si llega algo, si no llega nada a value, devuelve 
// un mensaje, sino lo devuelve undefained. Lo cual es que es correcto.
const isRequired = value => (
   !value && "Este valor es obligatorio."
);

const isNumber = value => (
   isNaN(Number(value)) && "El campo debe ser un número"
);

const MyField = ({ input, meta, type, label, name }) => (
   <div>
      <label htmlFor={name}>{label}</label>
      {/* En esta linea le añadimos los datos al input con un 
      spread operator y una comprobacion en la que si type
      viene undefained, sera de tipo text y sino sera de 
      tipo que le llegue */}
      <input {...input} type={!type ? "text" : type} />
      {
         meta.touched && meta.error && <span>{meta.error}</span>
      }
   </div>
);

// Este componente recibe tres propiedades y aqui es donde los modificaremos
const CustomerEdit = ({ name, dni, age }) => {
   return (
      <div>
         <h2>Edición del cliente</h2>
         <form action="">
            <Field
               name="name"
               component={MyField}
               validate={isRequired}
               label="Nombre"
            ></Field>
            <Field
               name="dni"
               component={MyField}
               validate={[isRequired, isNumber]}
               label="DNI"
            ></Field>
            <Field
               name="age"
               component={MyField}
               type="number"
               validate={isNumber}
               label="Edad"
            ></Field>
         </form>
      </div>
   );
};

CustomerEdit.propTypes = {
   name: PropTypes.string,
   dni: PropTypes.string,
   age: PropTypes.number,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
