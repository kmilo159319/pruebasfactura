import React, { useContext, useState } from 'react';
import {
  BoxCountProductsDocument1,
  BoxDocument3,
  BoxFooterDocument1,
  BoxFooterDocument2,
  BoxFooterDocument3,
  BoxInvoive,
  BoxSearchCustomer,
  ButtonFooterDocument,
  Container1,
  ContainerPrdocutsAdd,
  ContainerTboddyDocument,
  CustumerDocument,
  TableBoddyDocument,
  TitleDocument,
} from '../../styles/components/CreateDocument/CreateDocumentStyle';
import { AppContext } from '../../context/AppContext';
import { ProductsSection } from './ProductsSection';
import { ItemInvoice } from './ItemInvoice';

export const Section1 = () => {
  const {
    state: { customer, Products, document },
  } = useContext(AppContext);
  const [taxPercentage, setTaxPercentage] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const currentDate = new Date().toLocaleDateString();
  const subtotal = document.reduce((total, item) => total + item.total, 0);
  const taxAmount = subtotal * (taxPercentage / 100);
  const total = subtotal + taxAmount;

  const handleTaxPercentageChange = (event) => {
    setTaxPercentage(event.target.value);
  };

  const handleCustomerSelection = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleSenDocument = async (request) => {
    const token = localStorage.getItem('Token');

    fetch('http://localhost:8000/api/Documents', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => {
        const data = response.json();
        alert('datos guardados satisfactoriamente');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const requestBody = {
    id_customer: selectedCustomer.id,
    user_id: 14,
    general_description: 'Descripción del documento de venta',
    general_total: total,
    items: document.map((item) => ({
      id_product: item.id,
      quantity: item.cantidad,
      price_by_unit: item.price,
      total: item.total,
    })),
  };

  return (
    <Container1 className="row d-flex justify-content-end">
      <div className="col-6 d-flex justify-content-end mb-4">
        <BoxInvoive className="col-7 mx-4 row">
          <CustumerDocument className="col-7 h-25 row mt-3 ms-2">
            <h2 className="col-10">Elige tu cliente</h2>
            <select
              className="col-9"
              value={selectedCustomer ? selectedCustomer.name : ''}
              onChange={(event) => {
                const selectedCustomer = customer.find(
                  (customer) => customer.name === event.target.value
                );
                handleCustomerSelection(selectedCustomer);
              }}
            >
              <option value="">Seleccione un cliente</option>
              {customer.map((customer) => (
                <option key={customer.id} value={customer.name}>
                  {customer.name}
                </option>
              ))}
            </select>
            <div className="col-12 row d-flex align-items-center mt-3">
              <h3 className="col-6">Tipo de identificacion :</h3>
              <h4 className="col-6">
                {selectedCustomer ? selectedCustomer.type_identification : null}
              </h4>
            </div>
            <div className="col-11 row d-flex align-items-center justify-content-center">
              <h3 className="col-8">Numero de identificacion :</h3>
              <h4 className="col-4">
                {selectedCustomer
                  ? selectedCustomer.number_identification
                  : null}
              </h4>
            </div>
            <div className="col-11 row d-flex align-items-center">
              <h3 className="col-4">Nombre :</h3>
              <h4 className="col-6">
                {selectedCustomer ? selectedCustomer.name : null}
              </h4>
            </div>
          </CustumerDocument>
          <TitleDocument className="col-5 h-25 row d-flex align-items-center">
            <h2 className="col-12 ">Document</h2>
            <h3 className="col-4">date</h3>
            <h4 className="col-5 mt-2">{currentDate}</h4>
          </TitleDocument>
          <div className="col-11 h-50 ms-3 row">
            <table className="col-12 m-2">
              <thead className="col-12 ms-4 text-dark">
                <tr className="col-12 d-flex justify-content-center text-center align-items-start">
                  <th className="col-1 ms-4"></th>
                  <th className="col-4">Descripción</th>
                  <th className="col-2 row">
                    cantidad
                    <h4 className="col-1"></h4>
                    <h6 className="col-5 mt-2 "></h6>
                    <h4 className="col-1"></h4>
                  </th>
                  <th className="col-2">Precio</th>
                  <th className="col-2">Total</th>
                </tr>
              </thead>
              <TableBoddyDocument className="col-12 ms-4 ">
                <ContainerTboddyDocument>
                  {document.map((item) => (
                    <ItemInvoice
                      id={item.id}
                      url={item.url}
                      description={item.description}
                      cantidad={item.cantidad}
                      price={item.price}
                      total={item.total}
                    ></ItemInvoice>
                  ))}
                </ContainerTboddyDocument>
              </TableBoddyDocument>
            </table>
          </div>
          <div className="h-25 row d-flx align-items-start justify-content-center ms-1 mt-2">
            <BoxFooterDocument1 className="col-5 row">
              <h2 className="col-12">Concepto de factura</h2>
              <input className="col-12 mt-3" type="text" name="" id="" />
            </BoxFooterDocument1>
            <BoxFooterDocument2 className="col-2">
              <h2 className="col-8">Porcentaje de impuesto</h2>
              <input
                className="col-12 mt-2"
                type="text"
                name=""
                id=""
                value={taxPercentage.replace(/[^0-9]/g, '')}
                onChange={handleTaxPercentageChange}
                inputMode="numeric"
                pattern="[0-9]*"
              />
            </BoxFooterDocument2>
            <BoxFooterDocument3 className="col-4 row">
              <div className="col-8">
                <h3>Subtotal :</h3>
                <h3>Total impuestos :</h3>
                <h3>total :</h3>
              </div>
              <div className="col-4">
                <h4>{subtotal}</h4>
                <h4>{taxAmount}</h4>
                <h4>{total}</h4>
              </div>
              <ButtonFooterDocument
                onClick={() => handleSenDocument(requestBody)}
                className="mt-4 col-12 "
              >
                Crear documento
              </ButtonFooterDocument>
            </BoxFooterDocument3>
          </div>
        </BoxInvoive>
      </div>
      <div className="col-5 row d-flex align-items-around justify-content-start">
        <BoxSearchCustomer className="col-7">1</BoxSearchCustomer>
        <BoxCountProductsDocument1 className="col-4 mt-4 me-3 row">
          <div className="col-7 d-flex justify-content-center align-items-center">
            Cantidad de productos
          </div>
          <h2 className="col-5 d-flex justify-content-center align-items-center">
            {Products.length}
          </h2>
        </BoxCountProductsDocument1>
        <BoxDocument3 className="col-7 mt-4">3</BoxDocument3>
        <ContainerPrdocutsAdd className="col-11 mt-4 mb-5 ">
          {Products.map((product) => (
            <ProductsSection product={product} />
          ))}
        </ContainerPrdocutsAdd>
      </div>
    </Container1>
  );
};
