import styled from 'styled-components';
import { colors } from '../Colors';

export const Title1 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 58.5385px;
  line-height: 71px;
  letter-spacing: 0.03em;
  color: rgba(0, 0, 0, 0.8);
`;

export const InputLogin = styled.input`
  /* Rectangle 51 */
  box-sizing: border-box;
  height: 40px;
  background: #ffffff;
  border: 2px solid #cdcdcd;
  border-radius: 10px;
  font-size: 20px;
`;

export const ButtonLogin = styled.button`
  /* Neutral/White/100 */
  background: #ffffff;
  border-radius: 16.5385px;
  padding: 8px 0px 8px 0px;
  width: 170.69px;
  color: ${colors.pink};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  border: none;
  box-shadow: 11px 7px 30px rgba(0, 0, 0, 0.2);
`;

export const Title2 = styled.img`
  width: 41em;
`;

export const Decoracion1 = styled.img`
  position: absolute;
  right: 0;
  top: 3em;
`;

export const Title3 = styled.div`
  color: ${colors.blue1};

  &:hover {
    cursor: pointer;
  }
`;
