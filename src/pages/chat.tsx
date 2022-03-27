import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
  BoxInputSubmit,
  BoxTaks,
  ButtonDarkCodeMode,
  ColumnChat,
  ColumnTalks,
  ContainerChat,
  ContainerInitTalk,
  HeaderTitle,
  Message,
  ProfilePeople,
  RowPeople,
  SectionAddTalk,
  SpanMessage
}
  from "../styles/styles";
import { TiWeatherNight } from "react-icons/ti";

import ContextDarlModelMode from "../context/context";
import InputMessage from "../components/Input/input";
import ButtonSubmit from "../components/button/button";

import { io } from "socket.io-client";

const socket = io("https://chatmemessages.herokuapp.com", {
  withCredentials: true,
});


interface TypesAllTalks {
  roomName: string;
  talks: [];
  userOne: string;
  userOneName: string;
  userTwoName: string;
  srcOne: string;
  userTwo: string;
  srcTwo: string;
  __v?: number;
  id: string;
}

interface TypeArray {
  userId: string;
  message: string;
  dateAt: string;
}

interface TypeMessageRoom {
  room: string;
  message: string;
}

const TalkChat: React.FC = () => {
  const [buttonAction, SetAction] = useState<boolean>(true);
  const [getErr, setErr] = useState<boolean>(false);
  const elementScroll = useRef<HTMLDivElement>(null);
  const [displayButton, setDButton] = useState<boolean>(false);
  const navigate = useNavigate();

  // Context Contendo o state do darkModelMode
  const contextDark = useContext(ContextDarlModelMode);

  const [allTalks, setAllTalks] = useState<TypesAllTalks[]>();
  const [getMessage, setMessage] = useState<TypeMessageRoom>({ message: "", room: "" });

  const [refresh, setRefresh] = useState<boolean>(false);

  const [messages_one, setMessageOne] = useState<TypeArray[]>();

  const [useTwo, setUserTwo] = useState<string>("");

  useEffect(() => {
    axios.post("https://chatmemessages.herokuapp.com/verify", { email: localStorage.email }).then(response => {
      const data = response.data;
      if (!data.authorization) navigate("/");
      else {
        sessionStorage.hashTemp = data.hashSocket;
        // add o id ao sistema
        socket.emit("init", {
          userId: localStorage.myid,
          hashSocket: sessionStorage.hashTemp,
        });

      };

    }).catch(() => navigate("/"));

    // add todas as conversas
    socket.on("allTalks", data => {
      setAllTalks(data);

    });

    // checagem de novas msgs
    socket.on("messages_one", data => {
      setMessageOne(data.talks);
      const element = elementScroll.current;
      element?.scrollTo({ behavior: "smooth", top: element?.scrollHeight });
    });

    // refresh em caso de nova room criada
    socket.on("refreshAll", (id) => {
      if (localStorage.myid === id) {
        setRefresh(v => !v);
      }
    });

  }, [refresh, navigate]);

  useEffect(() => {
    const dataRow: HTMLElement | null = document.querySelector(`[data-row="0"]`);
    dataRow && dataRow.click();

  }, []);

  useEffect(() => {

    if (localStorage.getItem("darkModelMode")) {
      contextDark.setDark(true);
    }

    if (!localStorage.getItem("token")) navigate("/");

  }, [contextDark, navigate]);


  // manipulador dark Model/Mode
  const handleClickDark = () => {
    contextDark.setDark(values => !values);

    if (!contextDark.darkModeModel) {
      localStorage.setItem("darkModelMode", "true");
    } else {
      localStorage.removeItem("darkModelMode");
    };

  };

  const handleChangeTalk = (room: string): void => {
    // envia a msg para a room e adiciona valores no state
    socket.emit("getMessagesRoom", room, sessionStorage.hashTemp);

    setMessage(values => ({
      ...values,
      room: room,
    }));
  };

  // envia novas mensagens
  const hanldeClickSubmitMessage = (data: TypeMessageRoom): void => {
    if (buttonAction) return;

    socket.emit("onMessageEmit", {
      message: data.message,
      room: data.room,
      userId: localStorage.myid,
      hashSocket: sessionStorage.hashTemp,
    });

    setMessage(values => ({ ...values, message: "" }));

  };

  // add o usuário a ser inicado uma conversa
  const handleAddUserTwo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setUserTwo(value);
  };

  // cria uma nova room
  const handleAddRoom = () => {

    if (useTwo.trim().length <= 0) {
      setErr(true);
      const time = setTimeout(() => { setErr(false) }, 2000);

      return () => clearTimeout(time);
    };

    socket.emit("onCreateRoom", {
      userId: localStorage.myid,
      userOne: localStorage.myid,
      srcOne: localStorage.url,
      userTwo: useTwo,
      userName: localStorage.userName,
      hashSocket: sessionStorage.hashTemp,
    });

    setUserTwo("");
    setDButton(false);
  };

  const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(values => ({
      ...values,
      message: event.target.value,
    }));
  };

  const handleClickSelectMessages = (key: number): void => {
    SetAction(false);
    // styles perfil selecionado
    const elementActive = document.querySelectorAll(`.active`) as NodeListOf<HTMLElement>;
    elementActive.forEach(values => values.classList.remove("active"));

    const Element = document.querySelector(`[data-row="${key}"]`) as HTMLElement;
    Element.classList.add("active");

  };

  // handle manipulador display button
  const handleChangeAddTalk = (): void => {
    setDButton(value => !value);
  };

  return (
    <ColumnChat >

      <HeaderTitle>
        <h1>Chat Me</h1>

        <ButtonDarkCodeMode onClick={handleClickDark} darkModelMode={contextDark.darkModeModel}>
          <TiWeatherNight className="icon-button" />
        </ButtonDarkCodeMode>

      </HeaderTitle>

      <SectionAddTalk>
        <ButtonSubmit text="Iniciar uma conversa" onClick={handleChangeAddTalk} />
        <strong>Seu ID: {localStorage.myid}</strong>
        <span style={{ color: "red" }}>{getErr && "ID vazio ou inválido!"}</span>
        <ContainerInitTalk display={String(displayButton)}>
          <input autoComplete="off" value={useTwo} type="text" placeholder="ID do contato" required name="userTwo" onChange={handleAddUserTwo} />
          <ButtonSubmit text="Iniciar" onClick={handleAddRoom} />
        </ContainerInitTalk>
      </SectionAddTalk>

      <BoxTaks>

        <ColumnTalks>
          {allTalks?.map((values, key) => (
            <RowPeople
              style={{ order: key }}
              key={key}
              data-row={key}
              active={true}
              onClick={() => {
                handleClickSelectMessages(key);
                handleChangeTalk(values.roomName);
              }
              }
            >
              <ProfilePeople src={localStorage.myid === values.userOne ? values.srcTwo : values.srcOne} />
              <strong>{localStorage.myid === values.userOne ? values.userTwoName : values.userOneName}</strong>

            </RowPeople>
          ))}

        </ColumnTalks>

        <ContainerChat ref={elementScroll}>
          {messages_one?.map((val, key) => (
            <Message typeMessage={val.userId === localStorage.myid ? "emit" : "on"} key={key}>
              <SpanMessage date={new Date(val.dateAt).toLocaleDateString("pt-br")}>{val.message}</SpanMessage>
            </Message>
          ))}
        </ContainerChat>
      </BoxTaks>

      <BoxInputSubmit>
        <InputMessage
          value={getMessage.message}
          name="message"
          placeholder="Digite sua mensagem"
          onChange={handleChangeMessage}
        />
        <ButtonSubmit disabled={buttonAction} text="Enviar" onClick={() => hanldeClickSubmitMessage(getMessage)} />
      </BoxInputSubmit>


    </ColumnChat>

  );
};

export default TalkChat;
