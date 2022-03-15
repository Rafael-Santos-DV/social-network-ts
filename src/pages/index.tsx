import { BackgroundLogo, BoxLoginGoogle, BoxLogo, Container, LogoGoogle, RowFrame } from "../styles/styles";

import frameSvg from "../assets/image-peo.svg";
import logoGoogle from "../assets/logo-google.png";
import logoRede from "../assets/logo-rede-social.svg";


function PageInitial() {
  return (
    <Container>
      <BoxLogo>
        <BackgroundLogo src={logoRede} alt="logo rede" />
        <strong>Chat-me messsage</strong>
      </BoxLogo>

      <RowFrame src={frameSvg} alt="logo rede social" />

      <BoxLoginGoogle>
        <LogoGoogle src={logoGoogle} alt="logo do google" />
        <span>Entre com sua conta do Google</span>
      </BoxLoginGoogle>

    </Container>
  );
};


export default PageInitial;
