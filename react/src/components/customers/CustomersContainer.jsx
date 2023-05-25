import React, {useState} from 'react';
import {
  BoxEditCustomer,
  ButtonCreateCustumer,
  ContainerCustomers,
  TableCustumers,
} from '../../styles/components/Customers/Customers';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { CustomerItem } from './CustomerItem';
import { EditCustomer } from './EditCustomer';

export const CustomersContainer = () => {
  const {
    state: { customer },
    deleteCustomer,
  } = useContext(AppContext);
  const token = localStorage.getItem('Token');
  const [editCustomer, setEditCustomer] = useState(false);
  const [customerItem, setCustomerItem] = useState({});

  const handleEdit = (item) => {
    setCustomerItem({...item});
    setEditCustomer(!editCustomer);
  }

  const handleCancel = () =>{
    setEditCustomer(!editCustomer);
  }

  return (
    <ContainerCustomers>
      <div className={`col-12 row d-flex ${editCustomer ? 'justify-content-center' : 'justify-content-end'}`}>
      {editCustomer ? (
           <EditCustomer item={customerItem} handleCancel={()=>handleCancel()} />
          ) : (
            <TableCustumers>
            <div className="col-12 my-2 mt-3 d-flex justify-content-end">
              <ButtonCreateCustumer className="col-2 me-3">
                crear cliente
              </ButtonCreateCustumer>
            </div>
            <thead className="col-11 row d-flex justify-content-end align-items-center ms-5">
              <tr className="col-12 row d-flex justify-content-center text-center">
                <th className="col-1">ID</th>
                <th className="col-3">Tipo de Identificación</th>
                <th className="col-3">Número de Identificación</th>
                <th className="col-3">Nombre del Cliente</th>
                <th className="col-2">acciones</th>
              </tr>
            </thead>
            <tbody className="col-11 row d-flex justify-content-end ms-5">
              {customer.map((item) => (
                <CustomerItem
                  customer={item}
                  handleDelete={() => deleteCustomer(item.id, token)}
                  handleEdit={()=>handleEdit(item)}
                />
              ))}
            </tbody>
          </TableCustumers>
          )}
      </div>
    </ContainerCustomers>
  );
};
