import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import App from "./App";
import "./main.css";

const Styled = styled.div`
  max-width: 375px;
  margin: 30px auto;
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Styled>
      <App />
    </Styled>
  </React.StrictMode>
);
