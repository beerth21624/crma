import React from 'react';
import styled from 'styled-components';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E32F12',
    },
    secondary: {
      main: '#a36955',
    },
  },
});
const useStyles = makeStyles((theme) => ({}));

const RootPage = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  background-color: #e7e7e7;
`;

const RootPageItemHead = styled.div`
  width: 80vw;
  height: 30vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeadTitle = styled.h3`
  font-size: 40px;
  color: white;
`;
const RootPageItem = styled.div`
  min-height: 50vh;
  width: 80vw;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;
const Image = styled.img``;
const History = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar></Navbar>
      <RootPage>
        <RootPageItemHead>
          <HeadTitle>ประวัติหน่วย</HeadTitle>
        </RootPageItemHead>
        <RootPageItem>
          <Image src="/images/history.png" alt="" />
        </RootPageItem>
      </RootPage>
      <Footer></Footer>
    </div>
  );
};

export default History;
