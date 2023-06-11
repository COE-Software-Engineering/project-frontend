import React from "react";
import styled from "styled-components";
import IonIcon from "./Ionicon";

const CommentSection = () => {
  return (
    <CommentSectionWrapper>
      <div className="attach-input-wrapper">
        <button>
          <IonIcon iconName={"attach"} />
        </button>
        <input type="text" placeholder="Type or send an announcement..." />
      </div>
      <button>
        <IonIcon iconName={"send"} />
      </button>
    </CommentSectionWrapper>
  );
};

const CommentSectionWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 10;
  position: fixed;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  /* margin: 0 5rem; */

  & .attach-input-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  & input,
  button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1rem;
    font-family: "Montserrat", sans-serif;
  }

  & input {
    width: 80%;
    color: white;
  }

  & button {
    cursor: pointer;
    border-radius: 10px;
    /* height: 20px; */
  }
`;

export default CommentSection;
