import React from 'react';
import styled from 'styled-components';

const RootPage = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 30px 30px 0px 30px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const DepartmentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  height: 20vh;
`;
const DepartmentItemHead = styled.div`
  padding: 1px 100px;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const DepartmentItem = styled.div`
  padding: 1px 50px;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const DepartmentLogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;
const DepartmentImg = styled.img`
  height: 50px;
  width: 50px;
`;

const DepartmentText = styled.p`
  font-size: 17px;
  color: #ababab;
`;
const CopyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: #202020;
`;
const Desc = styled.p`
  font-weight: 500;
  font-size: 17px;
  color: #ababab;
`;

const Htext = styled.h3`
  color: #e6e6e6;
`;
const Ptext = styled.p`
  color: #ababab;
`;
const Footer = () => {
  return (
    <RootPage>
      <TitleBox>
        <DepartmentBox>
          <DepartmentItemHead>
            <DepartmentLogoBox>
              <DepartmentImg src="/images/logo.png" alt="" />
              <Htext>Gerneral support division</Htext>
            </DepartmentLogoBox>
            <DepartmentText>
              ส่วนบริการ โรงเรียนนายร้อยพระจุลจอมเกล้า
            </DepartmentText>
            <DepartmentText>
              ถนนสุวรรณศร ตำบลพรหมณี อำเภอเมือง จังหวัดนครนายก 26001
            </DepartmentText>
          </DepartmentItemHead>
          <DepartmentItem>
            <Htext>หน่วยขึ้นตรง</Htext>
            <Ptext>กองพลาธิการ</Ptext>
            <Ptext>กองยุทธโยธา</Ptext>
            <Ptext>กองสนับสนุนการฝึก-ศึกษา</Ptext>
            <Ptext>แผนกธุรการ</Ptext>
          </DepartmentItem>
          <DepartmentItem>
            <Ptext>แผนกสรรพาวุธ</Ptext>
            <Ptext>แผนกขนส่ง</Ptext>
            <Ptext>แผนกสื่อสาร</Ptext>
            <Ptext>แผนกสวัสดิการ</Ptext>
            <Ptext>โรงพิมพ์</Ptext>
          </DepartmentItem>
          <DepartmentItem>
            <Htext>ติดต่อเรา</Htext>
            <Ptext>โทร.037393010-4</Ptext>
            <Ptext>ต่อ 62248</Ptext>
          </DepartmentItem>
        </DepartmentBox>
        <CopyBox>
          <Desc>
            Copyright &copy; {new Date().getFullYear()}, ส่วนบริการ
            โรงเรียนนายร้อยพระจุลจอมเกล้า
          </Desc>
          <Desc>Design By Ordnance</Desc>
        </CopyBox>
      </TitleBox>
    </RootPage>
  );
};

export default Footer;
