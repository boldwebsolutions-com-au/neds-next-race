import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { NextToJump } from "./components/NextToJump";
import { AppProvider } from "./AppContext";
import { BREAKPOINT, COLOR } from "./components/theme";
import { Footer } from "./components/Footer";

const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  background: ${COLOR.WHITE};
  flex-wrap: wrap;
  @media screen and (min-width: ${BREAKPOINT.SIZE_MOBILE}) {
    padding: 30px 30px 30px 0;
  }
`;

function App() {
  return (
    <AppProvider>
      <PageWrapper>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <NextToJump />
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    </AppProvider>
  );
}

export default App;
