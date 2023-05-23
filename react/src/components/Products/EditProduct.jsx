import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  BoxCreateAndEdit,
  BoxImgContainer,
  ButtonEditProduct,
  ContainerFormulario,
  ImgProduct,
} from '../../styles/components/Products/ProductStyle';
import { AppContext } from '../../context/AppContext';

export const EditProduct = ({ product, Close }) => {
  const token = localStorage.getItem('Token');
  const [editedProduct, setEditedProduct] = useState(product);
  const { setProducts } = useContext(AppContext);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleImage = (event) => {
    const updatedProduct = { ...editedProduct, url: event.target.value };
    setEditedProduct(updatedProduct);
  };

  const handleSave = async () => {
    try {
      const data = {
        description: editedProduct.description,
        price: editedProduct.price,
        url: editedProduct.url,
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      // se realiza la solicitud a la API para obtener el token de acceso
      const response = await axios.put(
        `http://localhost:8000/api/products/${editedProduct.id}`,
        data,
        config
      );

      // Manejar la respuesta de la API
      if (response.data) {
        setProducts(response.data);
        return response.data;
      } else {
        console.log('No data available');
        return null;
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
      return Promise.reject(error);
    }
  };

  return (
    <BoxCreateAndEdit className="row">
      <ContainerFormulario className="col-7 my-3 ms-3">
        <h2 className="mb-3">editar producto</h2>
        <div className="row">
          <h3 className="col-3 me-1 mt-1">Nombre</h3>
          <input
            className="col-8 mb-3"
            type="text"
            name=""
            id=""
            value={editedProduct.description}
            placeholder="Nombre del producto"
            onChange={(event) => {
              const updatedProduct = {
                ...editedProduct,
                description: event.target.value.toUpperCase(),
              };
              setEditedProduct(updatedProduct);
            }}
          />
          <h3 className="col-3 me-1 mt-1">Precio</h3>
          <input
            className="col-8 mb-3"
            type="text"
            name=""
            id=""
            placeholder="precio del producto"
            value={editedProduct.price}
            onChange={(event) => {
              const updatedProduct = {
                ...editedProduct,
                price: event.target.value.replace(/[^0-9]/g, ''),
              };
              setEditedProduct(updatedProduct);
              inputMode = 'numeric';
              pattern = '[0-9]*';
            }}
          />
          <h3 className="col-3 me-1 mt-1">Url</h3>
          <input
            className="col-8 mb-3"
            type="text"
            name=""
            id=""
            placeholder="url de la imagen"
            value={editedProduct.url}
            onChange={handleImage}
          />
          <div className="d-flex justify-content-center">
            <ButtonEditProduct className="col-4 me-4" onClick={Close}>
              cancelar
            </ButtonEditProduct>
            <ButtonEditProduct className="col-4" onClick={handleSave}>
              Guardar
            </ButtonEditProduct>
          </div>
        </div>
      </ContainerFormulario>
      <BoxImgContainer className="col-4 mx-2 my-3 text-center d-flex align-items-center justify-content-center">
        {editedProduct.url ? (
          <ImgProduct src={editedProduct.url} alt="" />
        ) : (
          'vista previa'
        )}
      </BoxImgContainer>
    </BoxCreateAndEdit>
  );
};
