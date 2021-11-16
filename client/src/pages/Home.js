import React from 'react';
import styled from 'styled-components';
import Navbar from '../componants/Navbar';
import Header from '../componants/Header';
import Main from '../componants/Main';
import FooterBar from '../componants/FooterBar';
import Footer from '../componants/Footer';

const RootPages = styled.div`
  display: flex;
  flex-direction: column;
`;
const Home = () => {
  return (
    <RootPages>
      <Navbar />
      <Header />
      <Main />
      <FooterBar />
      <Footer />
    </RootPages>
  );
};

export default Home;
