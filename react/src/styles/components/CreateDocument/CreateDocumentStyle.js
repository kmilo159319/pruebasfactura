import styled from 'styled-components';
import { colors } from '../Colors';

export const Container1 = styled.div`
  background-color: ${colors.gray4};
  height: 100vh;
  width: 102%;
`;

export const BoxInvoive = styled.div`
  width: 600px;
  height: 91vh;
  background: #ffffff;
  border-radius: 16.5385px;
  color: ${colors.pink};
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.43);
`;

export const BoxSearchCustomer = styled.div`
  width: 35rem;
  height: 10rem;
  background: #ffffff;
  border-radius: 16.5385px;
  color: ${colors.pink};
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.43);
`;

export const BoxCountProductsDocument1 = styled.div`
  width: 260px;
  height: 100px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 16.5385px;
  color: white;
  border: none;
  font-size: 20px;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.43);
  text-align: center;
`;

export const BoxDocument3 = styled.div`
  width: 18rem;
  height: 100px;
  background: #ffffff;
  border-radius: 16.5385px;
  color: ${colors.pink};
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.43);
`;

export const ContainerPrdocutsAdd = styled.div`
  height: 20rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px; /* Ancho del scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.orange1}; /* Color de la barra del scrollbar */
    border-radius: 5px; /* Redondear los bordes del scrollbar */
  }
`;

export const ContainerProduct = styled.div`
  width: 32rem;
  height: 12rem;
  background: #ffffff;
  border-radius: 16.5385px;
  color: ${colors.pink};
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.43);
`;

export const BoxImg = styled.div`
  height: 12rem;
  border-radius: 10px;
  background-color: #fdf0f3;
`;

export const BoxDescription = styled.div`
  color: black;
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
  h3 {
    font-size: 17px;
    font-weight: 700;
  }
  h4 {
    font-size: 16px;
  }
`;

export const ButtonDescription = styled.button`
  height: 38px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 10px;
  color: white;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
  padding-inline: 1rem;
`;

export const ImgAddProduct = styled.img`
  width: 60%;
`;

export const CustumerDocument = styled.div`
  h2 {
    font-size: 13px;
    font-weight: 700;
  }
  h3 {
    font-size: 10px;
    font-weight: 700;
  }
  h4 {
    font-size: 11px;
    color: black;
  }
  select {
    box-sizing: border-box;
    height: 28px;
    background: #ffffff;
    border: 2px solid #cdcdcd;
    border-radius: 10px;
    font-size: 14px;
  }
`;

export const TitleDocument = styled.div`
  h2 {
    font-size: 40px;
    color: #797885;
    height: 1px;
  }
  h3 {
    font-size: 30px;
    color: #797885;
  }
  h4 {
    font-size: 15px;
    color: #797885;
  }
`;

export const TableBoddyDocument = styled.tbody`
  height: 100%;

  tr {
    background-color: #e8e7f8;
    border-radius: 20px;
    height: 3rem;
  }
  td {
    color: black;
    font-size: 12px;
  }

  h4 {
    font-size: 30px;
    color: #25abf9;
    cursor: pointer;
  }
`;

export const TableImgItem = styled.img`
  width: 130%;
`;

export const ContainerTboddyDocument = styled.div`
  height: 18rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px; /* Ancho del scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.orange1}; /* Color de la barra del scrollbar */
    border-radius: 5px; /* Redondear los bordes del scrollbar */
  }
`;

export const BoxFooterDocument1 = styled.div`
  h2 {
    font-size: 15px;
    font-weight: 700;
  }
  input {
    box-sizing: border-box;
    height: 5rem;
    background: #ffffff;
    border: 2px solid #cdcdcd;
    border-radius: 10px;
    font-size: 14px;
  }
`;

export const BoxFooterDocument2 = styled.div`
  h2 {
    font-size: 14px;
    font-weight: 700;
  }
  input {
    box-sizing: border-box;
    background: #ffffff;
    border: 2px solid #cdcdcd;
    border-radius: 10px;
    font-size: 14px;
  }
`;

export const BoxFooterDocument3 = styled.div`
  h3 {
    font-size: 11px;
    font-weight: 700;
  }
  h4 {
    font-size: 12px;
    color: black;
  }
`;

export const ButtonFooterDocument = styled.button`
  height: 38px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 10px;
  color: white;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
  padding-inline: 1rem;
`;
