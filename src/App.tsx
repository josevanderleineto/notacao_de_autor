import React from "react";
import CutterGenerator from "./componets/Fomulario/CutterGereator";
import HeaderComponent from "./componets/Header";
import "./App.css";
import FooterComponent from "./componets/Footer";
import { styled } from "styled-components";

const App: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <Main>
          <CutterGenerator />
      </Main>
      <FooterComponent/>
    </div>
  );
};

const Main = styled.main`
  height: 80vh;
`;

export default App;
