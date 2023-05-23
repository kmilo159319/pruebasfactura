import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  BoxCreateAndEdit,
  BoxImgContainer,
  ButtonEditProduct,
  ContainerFormulario,
  ImgProduct,
} from '../../styles/components/Products/ProductStyle';
import { AppContext } from '../../context/AppContext';

export const CreateProduct = ({ close }) => {
  const token = localStorage.getItem('Token');
  const [newProduct, setNewProduct] = useState({
    description: '',
    price: '',
    url: '',
  });
  const { setProducts } = useContext(AppContext);

  const handleImage = (event) => {
    const updatedProduct = { ...newProduct, url: event.target.value };
    setNewProduct(updatedProduct);
  };

  const handleSave = async () => {
    try {
      const data = {
        description: newProduct.description,
        price: newProduct.price,
        url: newProduct.url,
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        'http://localhost:8000/api/products',
        data,
        config
      );

      // Manejar la respuesta de la API
      if (response.data) {
        setProducts(response.data);
        close();
      } else {
        console.log('No data available');
      }
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      if (error.response) {
        alert(error.response.data.errors.price);
        console.error(
          'Error en la solicitud:',
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.log('No se recibió respuesta del servidor');
      } else {
        console.log('Error al configurar la solicitud:', error.message);
      }
    }
  };

  return (
    <BoxCreateAndEdit className="row">
      <ContainerFormulario className="col-7 my-3 ms-3">
        <h2 className="mb-3">crear producto</h2>
        <div className="row">
          <h3 className="col-3 me-1 mt-1">Nombre</h3>
          <input
            className="col-8 mb-3"
            type="text"
            name=""
            id=""
            placeholder="Nombre del producto"
            value={newProduct.description}
            onChange={(event) =>
              setNewProduct({
                ...newProduct,
                description: event.target.value.toUpperCase(),
              })
            }
          />
          <h3 className="col-3 me-1 mt-1">Precio</h3>
          <input
            className="col-8 mb-3"
            type="text"
            name=""
            id=""
            placeholder="Precio del producto"
            value={newProduct.price}
            onChange={(event) =>
              setNewProduct({
                ...newProduct,
                price: event.target.value.replace(/[^0-9]/g, ''),
              })
            }
            inputMode="numeric"
            pattern="[0-9]*"
          />
          <h3 className="col-3 me-1 mt-1">Url</h3>
          <input
            className="col-8 mb-3"
            type="text"
            name=""
            id=""
            placeholder="URL de la imagen"
            value={newProduct.url}
            onChange={handleImage}
          />
          <div className="d-flex justify-content-center">
            <ButtonEditProduct className="col-4 me-4" onClick={close}>
              Cancelar
            </ButtonEditProduct>
            <ButtonEditProduct className="col-4" onClick={handleSave}>
              Guardar
            </ButtonEditProduct>
          </div>
        </div>
      </ContainerFormulario>
      <BoxImgContainer className="col-4 mx-2 my-3 text-center d-flex align-items-center justify-content-center">
        {newProduct.url ? (
          <ImgProduct src={newProduct.url} alt="" />
        ) : (
          'vista previa'
        )}
      </BoxImgContainer>
    </BoxCreateAndEdit>
  );
};
