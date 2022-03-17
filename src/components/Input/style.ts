import styled from "styled-components";

export const TextArea = styled.textarea`
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  width: 100%;
  min-height: 35px;
  max-width: 500px;
  resize: none;

  ::-webkit-scrollbar {
    display: none;
  }

  ::placeholder {
    font-size: 1rem;
  }
`;
