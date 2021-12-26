import React from 'react';
import styled from 'styled-components';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="link">
          <LogoBox>
            <Logo src="/images/logo.png" alt="" />

            <TitleBox>
              <Title>ส่วนบริการ</Title>
              <Title>โรงเรียนนายร้อยพระจุลจอมเกล้า</Title>
            </TitleBox>
          </LogoBox>
        </Link>
        <LogoBox>
          <Link to="/register" className="link">
            <Button
              style={{ height: '40px', width: '120px' }}
              variant="outlined"
            >
              ลงทะเบียน
            </Button>
          </Link>
          <Link to="/login" className="link">
            <Button
              style={{ height: '40px', width: '120px' }}
              variant="outlined"
            >
              เข้าสู่ระบบ
            </Button>
          </Link>
        </LogoBox>
      </RootPage>
      <BoxBar>
        <Link to="/" className="link">
          <MenuTitle>หน้าแรก</MenuTitle>
        </Link>
        <Link to="/boss" className="link">
          <MenuTitle>ผู้บริหาร</MenuTitle>
        </Link>
        <Link to="/history" className="link">
          <MenuTitle>ประวัติหน่วย</MenuTitle>
        </Link>
        <Link to="/document" className="link">
          <MenuTitle>ดาวน์โหลด</MenuTitle>
        </Link>
        <Link to="/contact" className="link">
          <MenuTitle>ติดต่อเรา</MenuTitle>
        </Link>
      </BoxBar>
    </ThemeProvider>
  );
};

export default Navbar;
