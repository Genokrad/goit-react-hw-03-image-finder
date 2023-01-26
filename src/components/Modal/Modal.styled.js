import styled from 'styled-components';

export const BackDropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  flex-direction: column;
`;

export const ModalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const BigImgStyled = styled.img`
  display: block;
  max-width: 80%;
  height: auto;
`;
