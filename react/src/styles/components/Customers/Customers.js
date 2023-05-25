import styled from 'styled-components';
import { colors } from '../Colors';

export const ContainerCustomers = styled.div`
  background-color: ${colors.gray4};
  height: 100vh;
`;

export const TableCustumers = styled.table`
  height: 86vh;
  width: 70rem;
  margin-right: 5rem;
  background: #ffffff;
  border-radius: 16.5385px;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.43);
  thead {
    background-color: #f8fafc;
    height: 3rem;
    color: #7b899d;
  }
  tbody {
    color: #a7b0bd;
    height: 28rem;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 8px; /* Ancho del scrollbar */
    }
    tr {
      border-bottom: solid 2px #f1f4f8;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.orange1}; /* Color de la barra del scrollbar */
      border-radius: 5px; /* Redondear los bordes del scrollbar */
    }
  }
  div {
    height: 4rem;
  }
  i {
    cursor: pointer;
    color: ${colors.orange1};
  }
`;

export const ButtonCreateCustumer = styled.button`
  height: 38px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 10px;
  color: white;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
  padding-inline: 1rem;
`;

export const BoxEditCustomer = styled.div`
  height: 66vh;
  width: 50rem;
  margin-right: 5rem;
  background: #ffffff;
  border-radius: 16.5385px;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.43);

  input{
    box-sizing: border-box;
    height: 46px;
    width: 60vh;
    background: #ffffff;
    border: 2px solid #cdcdcd;
    border-radius: 10px;
    font-size: 14px;
  }
  button{
  height: 35px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 10px;
  color: white;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
  }
  h2{
    font-weight: 700;
    font-size: 35px;
    color: ${colors.pink};
  }
`;