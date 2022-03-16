import React, { useContext } from "react";
import {
  BoxTaks,
  ButtonDarkCodeMode,
  ColumnChat,
  ColumnTalks,
  ContainerChat,
  HeaderTitle,
  Message,
  ProfilePeople,
  RowPeople
}
  from "../styles/styles";
import { TiWeatherNight } from "react-icons/ti";

import teste from "../assets/logo-rede-social.svg";
import ContextDarlModelMode from "../context/context";


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
            <span>Message afafaf aa fafaf 1</span>
          </Message>

          <Message typeMessage="on">
            <span>Message afafa afafa afaf Message afafa afafa afaf Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="emit">
            <span>Message afafaf aa fafaf </span>
          </Message>

          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>

          {/* // teste */}
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>

          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="emit">
            <span>Message afafa afafa afaf</span>
          </Message>
          <Message typeMessage="emit">
            <span>rafael</span>
          </Message>


        </ContainerChat>


      </BoxTaks>

    </ColumnChat>

  );
};

export default TalkChat;
