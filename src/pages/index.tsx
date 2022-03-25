import { BackgroundLogo, BoxLoginGoogle, BoxLogo, Container, RowFrame } from "../styles/styles";

import frameSvg from "../assets/image-peo.svg";
import logoRede from "../assets/logo-rede-social.svg";
import { useContext, useEffect } from "react";
import ContextDarlModelMode from "../context/context";
import { useNavigate } from "react-router-dom";


const PageInitial: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/talks");

  }, [navigate]);

  const ContextDark = useContext(ContextDarlModelMode);

  return (
    <Container>
      <BoxLogo darkModelMode={ContextDark.darkModeModel}>
        <BackgroundLogo src={logoRede} alt="Imagem da logo Rede Social Chat Me" />
        <strong>Chat-me messsage</strong>
      </BoxLogo>

      <RowFrame src={frameSvg} alt="Várias pessoas conversando pelo celular" />

      <BoxLoginGoogle>
        <div id="g_id_onload"
          data-client_id="613290123743-9heimvmt89p0c765nm5rcgdqt58moroc.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleCredentialResponse"
          data-auto_prompt="false">
        </div>

        <div className="g_id_signin"
          data-type="standard"
          data-shape="square"
          data-theme="filled_blue"
          data-text="$ {button.text}"
          data-size="large"
          data-locale="pt-BR"
          data-logo_alignment="left">
        </div>
      </BoxLoginGoogle>

    </Container >
  );
};


export default PageInitial;
