import React, { useContext, useState } from 'react';
import {
  BoxCountProducts,
  ButtonNewProduct,
  ContainerProducts,
  Div1,
  Div2,
  SearchButton,
} from '../../styles/components/Products/ProductStyle';
import { AppContext } from '../../context/AppContext';
import { CardProduct } from './CardProduct';
import { EditProduct } from './EditProduct';
import { CreateProduct } from './CreateProduct';

export const ProductSection = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {
    state: { Products },
  } = useContext(AppContext);
  const [newProduct, setNewProduct] = useState(false);

  const handleSearch = (event) => {
    setSearchValue(event.target.value.toUpperCase());
  };

  const handleItemClick = (item) => {
    setSelectedProduct(item);
  };

  return (
    <ContainerProducts className="row d-flex justify-content-end">
      <Div1 className="col-12 row">
        <div className="col-6 row">
          <div className="d-flex justify-content-end align-items-center ">
            <BoxCountProducts className="d-flex row">
              <div className="col-7 d-flex justify-content-center align-items-center">
                Cantidad de productos
              </div>
              <h2 className="col-5 d-flex justify-content-center align-items-center">
                {Products ? Products.length : 0}
              </h2>
            </BoxCountProducts>
          </div>
          <div className="d-flex justify-content-end">
            <SearchButton
              className="col-5 px-3"
              type="search"
              name=""
              id=""
              placeholder="Buscar producto"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="col-6 d-flex justify-content-center align-items-center">
          {selectedProduct ? (
            <EditProduct
              product={selectedProduct}
              Close={() => setSelectedProduct(null)}
            />
          ) : (
            <ButtonNewProduct
              onClick={() => {
                setSelectedProduct(null);
                setNewProduct(true);
              }}
              style={{ display: newProduct ? 'none' : 'block' }}
            >
              Nuevo producto
            </ButtonNewProduct>
          )}

          {newProduct ? (
            <CreateProduct Close={() => setNewProduct(false)} />
          ) : null}
        </div>
      </Div1>
      <Div2 className="col-10 row d-flex justify-content-center me-4 row">
        {Products
          ? Products.filter((item) =>
              item.description.includes(searchValue)
            ).map((item) => (
              <CardProduct
                product={item}
                key={item.id}
                onItemClick={() => {
                  handleItemClick(item);
                  setNewProduct();
                }}
              />
            ))
          : ''}
      </Div2>
    </ContainerProducts>
  );
};
