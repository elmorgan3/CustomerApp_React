import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from './../constants/index';

export const customers = handleActions({
   [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
   [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
   [UPDATE_CUSTOMER]: (state, action) => {
      const customerPayload = action.payload;// id = 2, name='nuevo nombre'
      const { id } = customerPayload; // 2
      // [ { id: 1, name: ''},
      //   { id: 2, name: 'viejo nombre'},
      //   { id: 3, name: ''} ]
      const customers = state;
      const initialValue = [];
      // Primera iteración
      // acumulador = []
      // customer = { id: 1, name: '' }
      // return [ { id: 1, name: '' } ]

      // Segunda iteración
      // acumulador = [ { id: 1, name: '' } ]
      // customer = { id: 2, name: 'viejo nombre' } => { id: 2, name: 'nuevo nombre' }
      // return [ { id: 1, name: '' }, { id: 2, name: 'nuevo nombre' } ]

      // Tercera iteración
      // acumulador = [ { id: 1, name: '' }, { id: 2, name: 'nuevo nombre' } ]
      const newCustomers = customers.reduce((acumulador, currentCustomer) => {
         if (currentCustomer.id === id) {
            return [...acumulador, customerPayload];
         } else {
            return [...acumulador, currentCustomer];
         }
      }, initialValue);

      return newCustomers;
   },
   [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);