import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const RootPage = styled.div`
  width: 100vw;
  height: calc(100vh - 130px);
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/background.jpeg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderTitle = styled.p`
  color: white;
  font-size: 60px;
  font-weight: 700;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const Header = () => {
  return (
    <RootPage>
      <TitleBox>
        <HeaderTitle>
          <Typewriter
            options={{
              cursor: '⎮',
              strings: ['ส่วนบริการ', 'Gerneral support division'],
              autoStart: true,
              loop: true,
              deleteSpeed: 'natural',
            }}
          />
        </HeaderTitle>
        {/* <Button
          style={{
            width: '200px',
            backgroundColor: '#FFC500',
            borderRadius: '50px',
            border: '3px solid white',
          }}
          variant="contained"
        >
          ดาว์โหลดเอกสาร
        </Button> */}
      </TitleBox>
    </RootPage>
  );
};

export default Header;
