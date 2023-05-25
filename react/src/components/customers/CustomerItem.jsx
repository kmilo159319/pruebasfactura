import React from 'react';

export const CustomerItem = ({ customer, handleEdit, handleDelete }) => {
  return (
    <>
      <tr className="col-12 row d-flex justify-content-center align-items-center text-center">
        <td className="col-1">{customer.id}</td>
        <td className="col-3">{customer.type_identification}</td>
        <td className="col-3">{customer.number_identification}</td>
        <td className="col-3">{customer.name}</td>
        <td className="col-2 ms-2 row">
          <i class="far fa-edit col-5 text-dark" onClick={handleEdit} />
          {customer.document == [] ? (
            <i
              class="far fa-trash-alt col-5 text-dark"
              onClick={handleDelete}
            />
          ) : (
            <i class="fas fa-ban col-5" />
          )}
        </td>
      </tr>
    </>
  );
};
