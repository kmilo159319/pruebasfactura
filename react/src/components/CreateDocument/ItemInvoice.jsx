import React from 'react';
import { TableImgItem } from '../../styles/components/CreateDocument/CreateDocumentStyle';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const ItemInvoice = (props) => {
  const { addTodocument, lessFromdocument } = useContext(AppContext);

  return (
    <tr className="col-12 d-flex justify-content-center text-center align-items-center mb-4">
      <td className="col-1 me-3">
        <TableImgItem src={props.url} alt="" />
      </td>
      <td className="col-4">{props.description}</td>
      <td className="col-2 d-flex align-items-center">
        <h4 className="col-1" onClick={() => lessFromdocument(props)}>
          -
        </h4>
        <h6 className="col-5 mt-2 ">{props.cantidad}</h6>
        <h4 className="col-1" onClick={() => addTodocument(props)}>
          +
        </h4>
      </td>
      <td className="col-2">{props.price}</td>
      <td className="col-2">{props.total}</td>
    </tr>
  );
};
