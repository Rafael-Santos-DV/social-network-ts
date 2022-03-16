import styled from "styled-components";
import TypesColors from "../styles/colors";


interface TypeMessage {
  typeMessage: string;
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  height: 100vh;

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
  background-color: ${TypesColors.colorCinza};
  border: 1px solid ${TypesColors.colorMain};
`;

export const RowFrame = styled.img`
  background-color: ${TypesColors.colorCinza};
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
  border: 1px solid ${TypesColors.colorMain};
  border-radius: 20px;
  padding: 2px 10px;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background-color: ${TypesColors.colorMain};
    border-color: ${TypesColors.colorWhite};
    color: ${TypesColors.colorWhite};

  }
`;

export const LogoGoogle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;



// Styles -> page talks

export const ColumnChat = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;


export const HeaderTitle = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;

  > h1 {
    font-size: 40px;
  }
`;

export const ButtonDarkCodeMode = styled.button`
  padding: 5px 20px;
  font-size: 30px;
  appearance: none;
  border: 1px solid ${TypesColors.colorMain};
  color: ${TypesColors.colorMain};
  border-radius: 20px;
  cursor: pointer;
  transition: box-shadow 200ms;
  background-color: #fff;

  &:hover {
    box-shadow: 0px 0px 5px ${TypesColors.colorMain};
  }
`;


export const BoxTaks = styled.main`
  display: grid;
  grid-template-columns: 1fr  3fr;
  background-color: #2d3554;
  padding: 10px 40px;

`;

export const ColumnTalks = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Message = styled.div<TypeMessage>`
  width: 100%;
  padding-right: 100px;
  text-align: ${props => props.typeMessage === "emit" ? "right" : "left"};

  > span {
    display: inline-block;
    border-radius: 10px;
    padding: 5px 40px;
    color: ${TypesColors.colorWhite};
    font-weight: bold;
    background-color: ${props => props.typeMessage === "emit" ? "#ff45d0" : "#5e8bf2"};

  }

`;


export const RowPeople = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > strong {
    font-size: 18px;
    color:  ${TypesColors.colorWhite};
  }
`;


export const ProfilePeople = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${TypesColors.colorWhite};

`;
