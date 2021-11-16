import React from 'react';
import styled from 'styled-components';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const RootePage = styled.div`
  width: 100vw;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7vh;
`;
const MainItemBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 78vw;
  padding: 5vh 7vw;
  border-radius: 10px;
`;
const ItemBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemBox1 = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
const TitleBoss = styled.h3`
  font-size: 40px;
  margin-bottom: 10px;
  border-bottom: 5px solid #ffcd00;
`;
const TitleBoss1 = styled.h3`
  font-size: 25px;
`;
const TitleBoss2 = styled.p`
  font-size: 22px;
  margin-top: 30px;
`;

const ImageBoss = styled.img`
  width: 300px;
`;

const MainItemBox2 = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url('/images/crmaBg.jpeg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  gap: 50px;
`;

const DepartMentText = styled.h3`
  font-size: 30px;
  color: white;
  border-bottom: 5px solid #ffcd00;
`;
const DepartMentRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 80vw;
  gap: 30px;
`;
const DepartMentBox = styled.div`
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
const DepartMentDesc = styled.div`
  color: white;
  font-size: 18px;
`;

const MainItemBox3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 50vh;
`;
const Main = () => {
  return (
    <RootePage>
      <MainItemBox>
        <ItemBox>
          <ImageBoss src="/images/boss1.jpeg" alt="" />
        </ItemBox>
        <ItemBox1>
          <TitleBoss>พันเอก ศักดิ์ระวี พึ่งเย็น</TitleBoss>
          <TitleBoss1>ผู้อำนวยการ ส่วนบริการ </TitleBoss1>
          <TitleBoss1>โรงเรียนนายร้อยพระจุลจอมเกล้า</TitleBoss1>
          <TitleBoss2>
            <strong>ภารกิจส่วนบริการ:</strong> ดำเนินการสนับสนุนหน่วยต่างๆ
            ในเรื่องที่เกี่ยวกับการพลาธิการ การยุทธโยธา การสรรพาวุธ การขนส่ง
            การสวัสดิการ การติดต่อสื่อสาร การสนับสนุนการฝึก-ศึกษา
            ตลอดจนบริการแรงงานและบริการอื่นๆ ตามที่ได้รับมอบหมาย
          </TitleBoss2>
        </ItemBox1>
      </MainItemBox>
      <MainItemBox2>
        <DepartMentText>หน่วยขึ้นตรง สบร.รร.จปร.</DepartMentText>
        <DepartMentRoot>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>กองพลาธิการ</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>กองยุทธโยธา</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>กองสนับสนุนการฝึก-ศึกษา</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>แผนกธุรการ</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>แผนกสวัสดิการ</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>แผนกสรรพาวุธ</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>แผนกสื่อสาร</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>แผนกขนส่ง</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>หมวดดุริยางค์</DepartMentDesc>
          </DepartMentBox>
          <DepartMentBox>
            <AccountBalanceIcon style={{ color: 'white', fontSize: '45px' }} />
            <DepartMentDesc>โรงพิมพ์</DepartMentDesc>
          </DepartMentBox>
        </DepartMentRoot>
      </MainItemBox2>
      <MainItemBox3></MainItemBox3>
    </RootePage>
  );
};

export default Main;
