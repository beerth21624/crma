import React from 'react';
import styled from 'styled-components';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  ContactDataHeadQuarter,
  contactDataQuarterMaster,
  contactDataCivilWar,
  contactDataSupport,
  contactDataWelfare,
  contactDataOrdnance,
  contactDataTransport,
  contactDataSignal,
  contactDataPrint,
} from '../data';

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
  justify-content: center;
`;

const TableRoot = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 40px 0px;
`;
const TableTitle = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

const TableText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const rows = [
  {
    department: 'แผนกสรรพาวุธ',
    phoneNumber: '62425',
  },
];
const Contact = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar></Navbar>
      <RootPage>
        <RootPageItemHead>
          <HeadTitle>ติดต่อเรา</HeadTitle>
        </RootPageItemHead>
        <RootPageItem>
          <TableRoot>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>กองบังคับการ</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ContactDataHeadQuarter.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>กองพลาธิการ</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactDataQuarterMaster.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>กองยุทธโยธา</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactDataCivilWar.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>กองสนับสนุนการฝึก - ศึกษา</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactDataSupport.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>แผนกสวัสดิการ</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactDataWelfare.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>แผนกสรรพาวุธ</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactDataOrdnance.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>แผนกขนส่ง</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactDataTransport.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>แผนกสื่อสาร</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactDataSignal.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* /////////////////////////////////////////////// */}
            <TableTitle>โรงพิมพ์</TableTitle>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell align="center">
                      <TableText>หน่วยที่ต้องการติดต่อ</TableText>
                    </TableCell>
                    <TableCell align="center">
                      <TableText>เบอร์โทรศัพท์</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contactDataPrint.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TableRoot>
        </RootPageItem>
      </RootPage>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
