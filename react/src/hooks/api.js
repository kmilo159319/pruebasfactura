import axios from 'axios';

export const getData = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      'http://localhost:8000/api/products',
      config
    );
    // Manejar la respuesta de la API
    if (response.data) {
      return response.data;
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    if (error.response) {
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

export const getUserInfo = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      'http://localhost:8000/api/datauser',
      config
    );
    // Manejar la respuesta de la API
    if (response.data) {
      return response.data;
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    if (error.response) {
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

export const getCustumer = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      'http://localhost:8000/api/Customers',
      config
    );
    // Manejar la respuesta de la API
    if (response.data) {
      return response.data;
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    if (error.response) {
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

export const deleteCustomer = async (customerId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `http://localhost:8000/api/Customers/${customerId}`,
      config
    );
    // Manejar la respuesta de la API
    if (response.data) {
      return response.data;
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud
    if (error.response) {
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
