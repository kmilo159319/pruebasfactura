import React, { useState, useEffect } from 'react';
import {
  BoxEditCustomer,
} from '../../styles/components/Customers/Customers';

export const EditCustomer = ({ item, handleCancel }) => {
  const token = localStorage.getItem('Token');
  const [editCustomer, setEditCustomer] = useState(item);

  useEffect(() => {
    setEditCustomer(item);
  }, [item]);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setEditCustomer(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Lógica para guardar los cambios del cliente editado
  };

  return (
    <BoxEditCustomer>
      <div className="h-75 mt-5 row">
        <h2 className="col-12 ms-4">Editar cliente</h2>
        <input
          className="col-4 ms-4"
          type="text"
          name="type_identification"
          value={item.type_identification}
          placeholder="Tipo de identificación"
          onChange={(event) => handleInputChange(event, 'type_identification')}
        />
        <input
          className="col-4 ms-4"
          type="text"
          name="number_identification"
          value={editCustomer.number_identification}
          placeholder="Número de identificación"
          onChange={(event) => handleInputChange(event, 'number_identification')}
        />
        <input
          className="col-4 ms-4"
          type="text"
          name="name"
          value={editCustomer.name}
          placeholder="Nombre"
          onChange={(event) => handleInputChange(event, 'name')}
        />
        <div className="col-12 row d-flex justify-content-around">
          <button className="col-4" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="col-4" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </BoxEditCustomer>
  );
};
