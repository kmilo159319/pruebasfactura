import React, { useContext } from 'react';
import {
  ButtonAddProduct,
  CardProducts,
  ContainerImg,
  DescriptionPoroduct,
  ImgProduct,
} from '../../styles/components/Products/ProductStyle';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

export const CardProduct = ({ product, onItemClick }) => {
  const { setProducts } = useContext(AppContext);

  const handleSave = async () => {
    const token = localStorage.getItem('Token');

    try {
      const data = {
        description: 'dsad',
        price: 432432,
        url: 'ewqewdsfd',
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // se realiza la solicitud a la API para obtener el token de acceso
      const response = await axios.delete(
        `http://localhost:8000/api/products/${product.id}`,
        config
      );

      // Manejar la respuesta de la API
      if (response.data) {
        setProducts(data);
        return response.data;
      } else {
        console.log('No data available');
        return null;
      }
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      if (error.response) {
        alert(error.response.data.errors);
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
    <CardProducts className="m-3 col-6 row">
      <ContainerImg className="my-2 col-6 d-flex justify-content-center align-items-end">
        <ImgProduct src={product.url} alt="" />
      </ContainerImg>
      <DescriptionPoroduct className="col-6 row d-flex justify-content-center ms-2 my-2">
        <h2 className="mt-3 col-12 mb-5">{product.description}</h2>
        <h3 className="col-6 mb-5">Precio :</h3>
        <p className="col-6">{product.price}</p>
        <i class="fas fa-trash-alt" onClick={handleSave}></i>
        <ButtonAddProduct className="mt-4" onClick={onItemClick}>
          editar producto
        </ButtonAddProduct>
      </DescriptionPoroduct>
    </CardProducts>
  );
};
