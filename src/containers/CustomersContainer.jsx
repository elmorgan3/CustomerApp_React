import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomerActions from './../components/CustomerActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCustomers } from './../actions/fetchCustomers';
import { getCustomers } from './../selectors/customers';

// Este container contiebe ek AppFrame que tiene el header, que es un string y el
// body, que llamara al metodo 'renderBody' que contendra el componente CustomersList 
// al cual le pasamos 'customers' que sera una array de los clientes, la cual llega 
// de un sevidor y la url, que sera la base en la que luego añadiremos el edit o el new.
// Tambien hañadimos el CustomerActions que espera un elemento de tipo react, el cual
// sera un button, que ira cargara la url '/customers/new'.
class CustomersContainer extends Component {

   componentDidMount() {
      if (this.props.customers.length === 0) {
         this.props.fetchCustomers();
      }
   }

   handleAddNew = () => {
      this.props.history.push('/customers/new');
   }

   renderBody = (customers) => {
      return (

         <div>
            <CustomersList
               customers={customers}
               urlPath={'customers/'}
            ></CustomersList>
            <CustomerActions>
               <button onClick={this.handleAddNew}>Nuevo cliente</button>
            </CustomerActions>
         </div>
      );
   }

   render() {
      return (
         <div>
            <AppFrame
               header={"Listado de clientes"}
               body={this.renderBody(this.props.customers)}
            ></AppFrame>
         </div>
      );
   }
}

CustomersContainer.defaultProps = {
   customers: []
}

CustomersContainer.propTypes = {
   fetchCustomers: PropTypes.func.isRequired,
   customers: PropTypes.array.isRequired,
};


const mapStateToProps = state => ({
   customers: getCustomers(state)
});


export default withRouter(connect(mapStateToProps, 
   { fetchCustomers })(CustomersContainer));