import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';
import CustomerActions from './CustomerActions';
import { Prompt } from 'react-router-dom';

const isNumber = value => (
   isNaN(Number(value)) && "El campo debe ser un número"
);



const validate = (values) => {
   const error = {};

   if (!values.name) {
      error.name = "El campo nombre es requerido";
   }

   if (!values.dni) {
      error.dni = "El DNI es un campo obligatorio";
   }

   return error;
};

const toNumber = (value) => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) =>
   value && (!previousValue ? value : (value > previousValue ? value : previousValue));

// Este componente recibe tres propiedades y aqui es donde los modificaremos
class CustomerEdit extends Component {

   renderMyField = ({ input, meta, type, label, name, withFocus }) => (
      <div>
         <label htmlFor={name}>{label}</label>
         {/* En esta linea le añadimos los datos al input con un 
         spread operator y una comprobacion en la que si type
         viene undefained, sera de tipo text y sino sera de 
         tipo que le llegue */}
         <input {...input}
            type={!type ? "text" : type}
            ref={withFocus && (txt => this.inputBox = txt)} />
         {
            meta.touched && meta.error && <span>{meta.error}</span>
         }
      </div>
   );

   componentDidMount() {
      if (this.inputBox) {
         this.inputBox.focus();
      }
   }

   render() {
      const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
      return (
         <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}>
               <Field
                  withFocus={true}
                  name="name"
                  component={this.renderMyField}
                  label="Nombre"
                  parse={toUpper}
                  format={toLower}
               ></Field>
               <Field
                  name="dni"
                  component={this.renderMyField}
                  validate={isNumber}
                  label="DNI"
               ></Field>
               <Field
                  name="age"
                  component={this.renderMyField}
                  type="number"
                  validate={isNumber}
                  label="Edad"
                  parse={toNumber}
                  normalize={onlyGrow}
               ></Field>
               <CustomerActions>
                  <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                  <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
               </CustomerActions>
               <Prompt
                  when={!pristine && !submitSucceeded}
                  message="Se perderan los datos si continua"
               ></Prompt>
            </form>
         </div >
      );
   }
};

CustomerEdit.propTypes = {
   onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({
   form: 'CustomerEdit',
   validate: validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
