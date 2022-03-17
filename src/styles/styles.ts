import styled from "styled-components";
import TypesColors from "../styles/colors";


interface TypeMessage {
  typeMessage: string;
}

interface ActiveView {
  active: boolean;
}

interface darkModelMode {
  darkModelMode: boolean;
}


interface TypeDate {
  date: string;
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
  height: 100%;

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
  max-height: 100vh;
`;


export const HeaderTitle = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;

  > h1 {
    font-size: 40px;
    color: ${TypesColors.colorMain};
    text-shadow: 0px 0px 5px ${TypesColors.colorBlackR};
  }
`;

export const ButtonDarkCodeMode = styled.button<darkModelMode>`
  padding: 5px 20px;
  font-size: 30px;
  appearance: none;
  border: 1px solid ${TypesColors.colorMain};
  color: ${TypesColors.colorMain};
  border-radius: 20px;
  cursor: pointer;
  transition: box-shadow 200ms;
  background-color: ${props => props.darkModelMode ? TypesColors.colorWhite : TypesColors.colorBlackR};

  &:hover {
    box-shadow: 0px 0px 5px ${TypesColors.colorMain};
  }
`;


export const BoxTaks = styled.main`
  display: grid;
  grid-template-columns: 1fr  3fr;
  background-color: #2d3554;
  padding: 10px 40px;
  gap: 30px;

  border-radius: 10px 10px 0 0;

  height: 100%;
  border: 1px solid red;

  overflow: hidden;


  @media only screen and (max-width: 678px) {
    padding: 10px 5px;
    gap: 10px;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

`;

export const ColumnTalks = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding: 4px 4px 0 4px;
  ::-webkit-scrollbar{
    display: none;
  }

`;

export const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px 4px;
  overflow-y: auto;


  ::-webkit-scrollbar {
    width: 8px;

  }
  ::-webkit-scrollbar-track{
    background-color: ${TypesColors.colorWhite};
    border-radius: 20px;

  }

  ::-webkit-scrollbar-thumb {
    background-color: ${TypesColors.colorRose};
    width: 8px;
    border-radius: 20px;
  }

  @media only screen and (max-width: 678px) {
    align-items: center;
  }


`;

export const Message = styled.div<TypeMessage>`
  width: 100%;
  padding-right: 100px;
  text-align: ${props => props.typeMessage === "emit" ? "right" : "left"};

  > span {
    display: inline-block;
    border-radius: 10px;
    color: ${TypesColors.colorWhite};
    font-weight: bold;
    background-color: ${props => props.typeMessage === "emit" ? TypesColors.colorRose : TypesColors.colorBlueB};
    padding: 10px 20px 13px 20px;

  }

  @media only screen and (max-width: 678px) {
    justify-content: center;
    padding-right: 0px;
    margin: 4px 0;

    > span {
      padding: 5px 8px 14px 8px;
      font-size: 11px;
    }
  }

`;


export const SpanMessage = styled.span<TypeDate>`
  position: relative;

  ::after {
    display: inline-block;
    content: "${props => props.date}";
    position: absolute;
    color: ${TypesColors.colorWhite};
    font-size: 10px;
    bottom: 0;
    right: 10px;

  }

`;

export const RowPeople = styled.div<ActiveView>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 3px;

  &.active {
    box-shadow: 1px 1px 0px ${TypesColors.colorRose},
  -1px -1px 0px ${TypesColors.colorRose};
  }



  transition: box-shadow 200ms;
  border-radius: 6px;
  cursor: pointer;

  > strong {
    font-size: 15px;
    color:  ${TypesColors.colorWhite};
  }

  @media only screen and (max-width: 678px) {
    gap: 8px;

    > strong {
      font-size: 11px;
    }
  }

  &:hover {
    box-shadow: 1px 1px 0px ${TypesColors.colorRose},
    -1px -1px 0px ${TypesColors.colorRose};
  }

`;


export const ProfilePeople = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${TypesColors.colorWhite};

  @media only screen and (max-width: 678px) {
    width: 28px;
    height: 28px;
  }

`;

export const BoxInputSubmit = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${TypesColors.colorBlackR};
  gap: 20px;
  padding: 10px;
  position: sticky;
  bottom: 0;
`;
