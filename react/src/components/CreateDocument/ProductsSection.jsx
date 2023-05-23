import React, { useContext } from 'react';
import {
  BoxDescription,
  BoxImg,
  ButtonDescription,
  ContainerProduct,
  ImgAddProduct,
} from '../../styles/components/CreateDocument/CreateDocumentStyle';
import { AppContext } from '../../context/AppContext';

export const ProductsSection = ({ product }) => {
  const {
    state: { document },
    addTodocument,
  } = useContext(AppContext);

  return (
    <ContainerProduct className="col-10 ms-3 mb-3 row">
      <div className="col-12 row">
        <BoxImg className="col-5 d-flex justify-content-center align-items-center">
          <ImgAddProduct src={product.url} alt="" />
        </BoxImg>
        <BoxDescription className=" col-7 row ms-2">
          <h2 className="col-10 mt-4">{product.description}</h2>
          <h3 className="col-3">precio:</h3>
          <h4 className="col-6">{product.price}</h4>
          <div className="col-12 d-flex justify-content-end">
            <ButtonDescription onClick={() => addTodocument(product)}>
              agrear al documento ;{' '}
            </ButtonDescription>
          </div>
        </BoxDescription>
      </div>
    </ContainerProduct>
  );
};
