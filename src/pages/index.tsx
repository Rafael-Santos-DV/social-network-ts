import { BackgroundLogo, BoxLoginGoogle, BoxLogo, Container, LogoGoogle, RowFrame } from "../styles/styles";

import frameSvg from "../assets/image-peo.svg";
import logoGoogle from "../assets/logo-google.png";
import logoRede from "../assets/logo-rede-social.svg";
import { useContext } from "react";
import ContextDarlModelMode from "../context/context";


const PageInitial: React.FC = () => {

  const ContextDark = useContext(ContextDarlModelMode);

  return (
    <Container>
      <BoxLogo darkModelMode={ContextDark.darkModeModel}>
        <BackgroundLogo src={logoRede} alt="Imagem da logo Rede Social Chat Me" />
        <strong>Chat-me messsage</strong>
      </BoxLogo>

      <RowFrame src={frameSvg} alt="Várias pessoas conversando pelo celular" />

      <BoxLoginGoogle darkModelMode={ContextDark.darkModeModel}>
        <LogoGoogle src={logoGoogle} alt="logo da empresa do Google" />
        <span>Entre com sua conta do Google</span>
      </BoxLoginGoogle>

    </Container>
  );
};


export default PageInitial;
