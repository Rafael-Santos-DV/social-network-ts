import React from "react";
import { BoxTaks, ButtonDarkCodeMode, ColumnChat, ColumnTalks, ContainerChat, HeaderTitle, Message, ProfilePeople, RowPeople } from "../styles/styles";
import { TiWeatherNight } from "react-icons/ti";

import teste from "../assets/logo-rede-social.svg";


const TalkChat: React.FC = () => {

  return (
    <ColumnChat>

      <HeaderTitle>
        <h1>Chat Me</h1>

        <ButtonDarkCodeMode>
          <TiWeatherNight className="icon-button" />
        </ButtonDarkCodeMode>

      </HeaderTitle>

      <BoxTaks>

        <ColumnTalks>

          <RowPeople>
            <ProfilePeople src={teste} />
            <strong>Google</strong>
          </RowPeople>
          <RowPeople>
            <ProfilePeople src={teste} />
            <strong>Google</strong>
          </RowPeople>
          <RowPeople>
            <ProfilePeople src={teste} />
            <strong>Google</strong>
          </RowPeople>

        </ColumnTalks>

        <ContainerChat>

          <Message typeMessage="emit">
            <span>Message afafaf aa fafaf </span>
          </Message>

          <Message typeMessage="on">
            <span>Message afafa afafa afaf</span>
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


        </ContainerChat>


      </BoxTaks>

    </ColumnChat>

  );
};

export default TalkChat;
