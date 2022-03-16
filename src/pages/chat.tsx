import React, { useContext } from "react";
import {
  BoxInputSubmit,
  BoxTaks,
  ButtonDarkCodeMode,
  ColumnChat,
  ColumnTalks,
  ContainerChat,
  HeaderTitle,
  Message,
  ProfilePeople,
  RowPeople,
  SpanMessage
}
  from "../styles/styles";
import { TiWeatherNight } from "react-icons/ti";

import teste from "../assets/logo-rede-social.svg";
import ContextDarlModelMode from "../context/context";
import InputMessage from "../components/Input/input";
import ButtonSubmit from "../components/button/button";


const TalkChat: React.FC = () => {

  // Context Contendo o state do darkModelMode
  const contextDark = useContext(ContextDarlModelMode);

  // manipulador dark Model/Mode
  const handleClickDark = () => {
    contextDark.setDark(values => !values);
  }


  const handleClickSelectMessages = (key: number): void => {

    // styles perfil selecionado
    const elementActive = document.querySelectorAll(`.active`) as NodeListOf<HTMLElement>;
    elementActive.forEach(values => values.classList.remove("active"));

    const Element = document.querySelector(`[data-row="${key}"]`) as HTMLElement;
    Element.classList.add("active");


    // buscando as messages

  };

  return (
    <ColumnChat >

      <HeaderTitle>
        <h1>Chat Me</h1>

        <ButtonDarkCodeMode onClick={handleClickDark} darkModelMode={contextDark.darkModeModel}>
          <TiWeatherNight className="icon-button" />
        </ButtonDarkCodeMode>

      </HeaderTitle>

      <BoxTaks>

        <ColumnTalks>

          <RowPeople
            key={1}
            data-row="1"
            active={true}
            onClick={() => handleClickSelectMessages(1)}
          >
            <ProfilePeople src={teste} />
            <strong>Google 1</strong>

          </RowPeople>

          <RowPeople
            key={2}
            data-row="2"
            active={true}
            onClick={() => handleClickSelectMessages(2)}
          >
            <ProfilePeople src={teste} />
            <strong>Google 1</strong>
          </RowPeople>




        </ColumnTalks>

        <ContainerChat>

          <Message typeMessage="emit">
            <SpanMessage date={"03/11/2022"}>Message afafaf aa fafaf 221</SpanMessage>
          </Message>

          <Message typeMessage="on">
            <SpanMessage date={"03/11/2022"}>Message afafa afafa afaf Message afafa afafa afaf Message afafa afafa afaf</SpanMessage>
          </Message>

          <Message typeMessage="emit">
            <SpanMessage date={"03/11/2022"}>Message afafaf aa fafaf 1</SpanMessage>
          </Message>

          <Message typeMessage="on">
            <SpanMessage date={"03/11/2022"}>Message afafa afafa afaf Message afafa afafa afaf Message afafa afafa afaf</SpanMessage>
          </Message>

          <Message typeMessage="emit">
            <SpanMessage date={"03/11/2022"}>Message afafaf aa fafaf 1</SpanMessage>
          </Message>

          <Message typeMessage="on">
            <SpanMessage date={"03/11/2022"}>Message afafa afafa afaf Message afafa afafa afaf Message afafa afafa afaf</SpanMessage>
          </Message>

          <Message typeMessage="emit">
            <SpanMessage date={"03/11/2022"}>Message afafaf aa fafaf 1</SpanMessage>
          </Message>

          <Message typeMessage="on">
            <SpanMessage date={"03/11/2022"}>Message afafa afafa afaf Message afafa afafa afaf Message afafa afafa afaf</SpanMessage>
          </Message>

          <Message typeMessage="emit">
            <SpanMessage date={"03/11/2022"}>Message afafaf aa fafaf 1</SpanMessage>
          </Message>

          <Message typeMessage="on">
            <SpanMessage date={"03/11/2022"}>Message afafa afafa afaf Message afafa afafa afaf Message afafa afafa afaf</SpanMessage>
          </Message>

          <Message typeMessage="emit">
            <SpanMessage date={"03/11/2022"}>Message afafaf aa fafaf 1</SpanMessage>
          </Message>

          <Message typeMessage="on">
            <SpanMessage date={"03/11/2022"}>Message afafa afafa afaf Message afafa afafa afaf Message afafa afafa afaf</SpanMessage>
          </Message><Message typeMessage="emit">
            <SpanMessage date={"03/11/2022"}>Message afafaf aa fafaf 1</SpanMessage>
          </Message>

          <Message typeMessage="on">
            <SpanMessage date={"03/11/2022"}>Message afafa afafa afaf Message afafa afafa afaf Message afafa afafa afaf</SpanMessage>
          </Message>

        </ContainerChat>
      </BoxTaks>

      <BoxInputSubmit>
        <InputMessage
          name="message"
          placeholder="Digite sua messagem"
          type="text"
        />
        <ButtonSubmit text="Enviar" />
      </BoxInputSubmit>


    </ColumnChat>

  );
};

export default TalkChat;
