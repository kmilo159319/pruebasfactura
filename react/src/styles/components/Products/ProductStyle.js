import styled from 'styled-components';
import { colors } from '../Colors';

export const ContainerProducts = styled.div`
  background-color: ${colors.gray4};
  height: 100vh;
`;

export const Div1 = styled.div`
  height: 40%;
`;

export const Div2 = styled.div`
  height: 45%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px; /* Ancho del scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.orange1}; /* Color de la barra del scrollbar */
    border-radius: 5px; /* Redondear los bordes del scrollbar */
  }
`;

export const BoxCreateAndEdit = styled.div`
  width: 500px;
  height: 240px;
  background: #ffffff;
  border-radius: 16.5385px;
  color: ${colors.pink};
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
  h3 {
    font-size: 17px;
  }
`;

export const BoxCountProducts = styled.div`
  width: 300px;
  height: 120px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 16.5385px;
  color: white;
  border: none;
  font-size: 20px;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
  text-align: center;
`;

export const SearchButton = styled.input`
  box-sizing: border-box;
  height: 40px;
  background: #ffffff;
  border: 2px solid #cdcdcd;
  border-radius: 10px;
  font-size: 15px;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
  outline: none;
`;

export const CardProducts = styled.div`
  width: 400px;
  height: 280px;
  background: #ffffff;
  border-radius: 16.5385px;
  color: ${colors.pink};
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
`;

export const ContainerImg = styled.div`
  height: 94%;
  border-radius: 10px;
  background-color: #fdf0f3;
`;

export const ButtonAddProduct = styled.button`
  height: 35px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 10px;
  color: white;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: 80%;
  margin-bottom: 2rem;
`;

export const DescriptionPoroduct = styled.div`
  h2 {
    font-size: 13px;
  }
  h3 {
    font-size: 15px;
    color: black;
  }
  p {
    font-size: 14px;
    color: black;
  }
`;

export const ContainerFormulario = styled.div`
  h3 {
    font-weight: 700;
    font-size: 15px;
  }
  input {
    box-sizing: border-box;
    height: 26px;
    background: #ffffff;
    border: 2px solid #cdcdcd;
    border-radius: 10px;
    font-size: 14px;
  }
`;

export const ButtonEditProduct = styled.button`
  height: 35px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 10px;
  color: white;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
`;

export const BoxImgContainer = styled.div`
  background: white;
  border-radius: 16.5385px;
  color: #8e8b8b;
  border: none;
  font-size: 20px;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
`;

export const ButtonNewProduct = styled.button`
  height: 35px;
  background-color: pink;
  background: ${colors.pink};
  border-radius: 10px;
  color: white;
  border: none;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
`;
