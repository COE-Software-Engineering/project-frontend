import React from "react";
import styled from "styled-components";
import IonIcon from "./components/Ionicon";

const Searchbar = ({ animationClass, styles }) => {
  return (
    <SearchbarWrapper className={animationClass} style={styles}>
      <input placeholder="Search product" />
      <button>
        <IonIcon iconName="search-outline" />
      </button>
    </SearchbarWrapper>
  );
};

const SearchbarWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  & input {
    width: 100%;
    padding: 0.5rem 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    /* filter: blur(10px); */
    color: white;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 0.7rem;
    -webkit-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
  }

  & button {
    border: none;
    outline: none;
    background-color: transparent;
    position: absolute;
    right: 5px;
  }
`;

export default Searchbar;
