import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior:smooth;
}

body {
  width: 100%;
  height: 100%;
  background-color:${({ theme }) => theme.bodyBackgroundColor};
  color:${({ theme }) => theme.textColor};
  font-family: 'Poppins', sans-serif;
  font-weight:400;
    /* font-size:12px; */
  font-style:normal;
    -webkit-font-smoothing: antialiased;
    /* -webkit-text-stroke-width: 0.1px; */
    -moz-osx-font-smoothing: grayscale;
  transition:all 0.50s linear;
  scroll-behavior:smooth;
  overflow-x:hidden;
}

ion-icon {
    --ionicon-stroke-width: 10px;
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
  }


p,button{
  font-size:12px;
}

p{
  line-height:1.4rem;
}

small{
  font-size:10px;
}


/* width */
::-webkit-scrollbar {
  width: 5px;
  height:5px;
}

/* Track */
::-webkit-scrollbar-track {

}

/* Handle */
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(255,255,255,0.5));  border-radius:20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {

}

`;
