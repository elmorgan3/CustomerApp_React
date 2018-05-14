import React, { Component } from 'react';

// Este higher order componente crea un componente nuevo que se le asigna las props del original y 
// se le añade la propiedas de INITIALVALUES.
export const setPropsAsInitial = WrappedComponent => (
   class extends Component {
      render() {
         return <WrappedComponent {...this.props} 
         initialValues={this.props}
         enableReinitialize/>;
      }
   }
);