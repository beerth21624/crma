import React from 'react';
import styled from 'styled-components';
import { Button, createTheme, ThemeProvider } from '@mui/material';

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
const RootPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  height: 85px;
  padding: 0px 20px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const TitleBox = styled.div`
  padding-top: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  height: 75px;
  width: 70px;
`;
const Title = styled.p`
  font-size: 15px;
  font-weight: 400;
`;

const BoxBar = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  height: 45px;
  background-color: #ffcd00;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MenuTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootPage>
        <LogoBox>
          <Logo src="/images/logo.png" alt="" />
          <TitleBox>
            <Title>ส่วนบริการ</Title>
            <Title>โรงเรียนนายร้อยพระจุลจอมเกล้า</Title>
          </TitleBox>
        </LogoBox>
        <LogoBox>
          <Button style={{ height: '40px', width: '120px' }} variant="outlined">
            ลงทะเบียน
          </Button>
          <Button style={{ height: '40px', width: '120px' }} variant="outlined">
            เข้าสู่ระบบ
          </Button>
        </LogoBox>
      </RootPage>
      <BoxBar>
        <MenuTitle>หน้าแรก</MenuTitle>
        <MenuTitle>ผู้บังคับบัญชา</MenuTitle>
        <MenuTitle>โครงสร้าง</MenuTitle>
        <MenuTitle>ดาวน์โหลด</MenuTitle>
        <MenuTitle>ติดต่อเรา</MenuTitle>
      </BoxBar>
    </ThemeProvider>
  );
};

export default Navbar;
