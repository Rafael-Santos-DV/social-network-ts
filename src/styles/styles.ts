import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  padding: 20px;

`;


export const BoxLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  > strong {
    font-size: 24px;
  }

`;

export const BackgroundLogo = styled.img`
  width: 130px;
  border-radius: 50%;
  background-color: #ccc;
  border: 1px solid #24FF00;
`;

export const RowFrame = styled.img`
  background-color: #ccc;
  background-size: 100%;
  width: 100%;
  max-width: 500px;
  border-radius: 80px;
  height: auto;
`;

export const BoxLoginGoogle = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  justify-content: center;
  align-items: center;
  border: 1px solid #24FF00;
  border-radius: 20px;
  padding: 2px 10px;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background-color: #24FF00;
    border-color: #fff;
    color: #fff;

  }
`;

export const LogoGoogle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
