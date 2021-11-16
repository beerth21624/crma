import React from 'react';
import styled from 'styled-components';

const RootPage = styled.div`
  display: flex;
  width: 100vw;
  height: 25vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1573511860313-d333c8022170?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ImageItem = styled.img`
  width: 200px;
  height: 100px;
`;
const FooterBar = () => {
  return (
    <RootPage>
      <ImageItem src="/images/banner-1.png" alt="" />
      <ImageItem src="/images/banner-2.png" alt="" />
      <ImageItem src="/images/banner-3.png" alt="" />
      <ImageItem src="/images/banner-4.png" alt="" />
      <ImageItem src="/images/banner-5.png" alt="" />
    </RootPage>
  );
};

export default FooterBar;
