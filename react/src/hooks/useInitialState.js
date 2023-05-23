import { useState, useEffect } from 'react';
import initialState from '../initialState';
import { getCustumer, getData, getUserInfo } from './api';

export const useInitialState = () => {
  const [Products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(async () => {
    const token = localStorage.getItem('Token');
    await getData(token).then((data) => {
      setState((prevState) => ({
        ...prevState,
        Products: data,
      }));
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('Token');
    getCustumer(token)
      .then((data) => {
        setCustomers(data);
        setState((prevState) => ({
          ...prevState,
          customer: data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem('STATE_KEY');
    return savedState ? JSON.parse(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('STATE_KEY', JSON.stringify(state));
  }, [state]);

  const addTodocument = (payload) => {
    const newItem = { ...payload, cantidad: 1, total: payload.price };
    const itemIndex = state.document.findIndex(
      (item) => item.id === payload.id
    );
    if (itemIndex !== -1) {
      // Si el item ya existe en el documento
      const updatedDocument = [...state.document];
      updatedDocument[itemIndex].cantidad += 1; // incrementa la cantidad
      updatedDocument[itemIndex].total =
        updatedDocument[itemIndex].cantidad * payload.price; // actualiza el total
      setState((prevState) => ({
        ...prevState,
        document: updatedDocument,
      })); // actualiza el estado del documento
    } else {
      // Si el item no existe en el carrito
      setState((prevState) => ({
        ...prevState,
        document: [...prevState.document, newItem], // agrega el articulo al documento
      }));
    }
  };

  const removeFromdocument = (payload) => {
    setState({
      ...state,
      document: state.document.filter((items) => items.id !== payload.id),
    });
  };

  const lessFromdocument = (payload) => {
    setState((prevState) => {
      const updatedDocument = [...prevState.document];
      const itemIndex = updatedDocument.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex !== -1) {
        updatedDocument[itemIndex].cantidad -= 1; // Disminuye la cantidad del producto en 1
        updatedDocument[itemIndex].total =
          updatedDocument[itemIndex].cantidad * payload.price; // Actualiza el total
        if (updatedDocument[itemIndex].cantidad === 0) {
          // Si la cantidad llegó a cero, filtra y quita el producto
          return {
            ...prevState,
            document: updatedDocument.filter((item) => item.id !== payload.id),
          };
        } else {
          // Si aún hay cantidad del producto, actualiza el estado
          return {
            ...prevState,
            document: updatedDocument,
          };
        }
      }
      return prevState; // Retorna el estado anterior si no se encuentra el producto
    });
  };

  const addTocustomer = (payload) => {
    setState({ ...state, customer: payload });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      documentsnews: [...state.documentsnews, payload],
    });
  };

  return {
    addTodocument,
    removeFromdocument,
    lessFromdocument,
    addTocustomer,
    addNewOrder,
    setProducts,
    Products,
    state,
  };
};
