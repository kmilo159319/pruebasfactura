import styled from 'styled-components';
import { colors } from '../Colors';
import { Link } from 'react-router-dom';

export const StyleNav = styled.nav`
  width: 101%;
  background-color: #d9d9d9;
`;

export const ButtonMenu = styled.button`
  text-align: center;
  font-family: 'ABeeZee', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: white;
  padding: 0.3em;
  width: 85px;
  height: 35px;
  background: ${colors.pink};
  border: 1px solid #8e88c1;
  border-radius: 25px;
  &:hover {
    color: #ffffff;
  }
`;

export const Panel = styled.div`
  position: absolute;
  background-color: ${colors.gray1};
  height: 100vh;
  width: 250px;
  top: 0;
`;

export const LogoPanel = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/pruebas-a5f70.appspot.com/o/img-pruebas%2Ftitulopanel.png?alt=media&token=11d8dcb1-9a51-4544-b26c-261b26bb8c32');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: relative;
  width: 100%;
  height: 3em;
`;

export const MenuSectionDashboard = styled.div`
  position: absolute;
  background-color: ${colors.blue4};
  height: 3em;
  width: 16.5em;
  border-radius: 8px;
  box-shadow: -7px 7px 22px rgba(0, 0, 0, 0.23);
  h2 {
    font-size: 20px;
    color: white;
  }

  div {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/pruebas-a5f70.appspot.com/o/img-pruebas%2Ficonodashboard.png?alt=media&token=44476122-56f4-4b25-b230-c8da5fd7c149');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 1.6rem;
    width: 3em;
  }
`;

export const MenuSectionPanel = styled.div`
  margin-top: 8rem;

  div {
    color: white;
    height: 25px;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  & :hover {
    color: ${colors.orange1};
  }
`;
