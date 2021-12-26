import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import { makeStyles } from '@mui/styles';
import {
  Button,
  createTheme,
  Pagination,
  TextField,
  ThemeProvider,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { observer, inject } from 'mobx-react';

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
  flex-direction: column;
  align-items: center;
`;
const TableRoot = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 40px 0px;
`;
const TableText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
const SearchBox = styled.div`
  width: 40%;
  height: 8vh;
  margin-top: 20px;
  box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const SearchTitle = styled.p`
  font-size: 18px;
`;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Document = (props) => {
  const classes = useStyles();
  const [searchData, setSearchData] = useState('');
  // const [page, setPage] = useState(0);
  // const [countPage, setCountPage] = useState(1);
  const { AllFileData } = props.fileStore.toJS();
  // const paginationQuantity = 5;

  const fileData = AllFileData.filter((data) => {
    if (searchData === '') {
      return data;
    } else if (
      data.FileName.toLowerCase().includes(searchData.toLowerCase()) ||
      data.FileDocName.toLowerCase().includes(searchData.toLowerCase())
    ) {
      return data;
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      props.fileStore.getFile();
    };
    fetchData();
    // const count = Math.ceil(fileData.length / paginationQuantity);
    // setCountPage(count);
    // console.log('cc', count);
  }, [props.fileStore]);

  const handleDownload = (path) => {
    props.fileStore.downloadFile(path);
  };
  // const handleCurrentPage = (e, value) => {
  //   setPage(value - 1);
  // };

  console.log('ff', fileData);
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <RootPage>
        <RootPageItemHead>
          <HeadTitle>ดาวน์โหลดหนังสือ</HeadTitle>
        </RootPageItemHead>
        <RootPageItem>
          <SearchBox>
            <SearchTitle>ค้นหาจากชื่อหนังสือ/ที่หนังสือ :</SearchTitle>
            <TextField
              onChange={(e) => setSearchData(e.target.value)}
              label="search"
              variant="outlined"
              size="small"
            />
          </SearchBox>
          <TableRoot>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: '#E32F12' }}>
                  <TableRow>
                    <TableCell style={{ width: '50px' }} align="center">
                      <TableText> ลำดับ</TableText>
                    </TableCell>
                    <TableCell align="left">
                      <TableText>ชื่อหนังสือ</TableText>
                    </TableCell>
                    <TableCell style={{ width: '100px' }} align="center">
                      <TableText>ที่หนังสือ</TableText>
                    </TableCell>
                    <TableCell style={{ width: '200px' }} align="center">
                      <TableText> action</TableText>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    // AllFileData.filter((data) => {
                    //   if (searchData === '') {
                    //     return data;
                    //   } else if (
                    //     data.FileName.toLowerCase().includes(
                    //       searchData.toLowerCase()
                    //     ) ||
                    //     data.FileDocName.toLowerCase().includes(
                    //       searchData.toLowerCase()
                    //     )
                    //   ) {
                    //     return data;
                    //   }
                    // })
                    fileData
                      // .filter(
                      //   (data, key) =>
                      //     key >= page * paginationQuantity &&
                      //     key < page * paginationQuantity + paginationQuantity
                      // )
                      .map((file, index) => (
                        <TableRow
                          key={file._id}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="left">{file.FileName}</TableCell>
                          <TableCell align="center">
                            {file.FileDocName}
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={() => handleDownload(file.FilePathName)}
                            >
                              ดาวน์โหลด
                            </Button>
                          </TableCell>
                        </TableRow>
                      )) || (
                      <TableRow>
                        <TableCell align="center">none</TableCell>
                      </TableRow>
                    )
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </TableRoot>
          {/* <Pagination
            count={countPage}
            shape="rounded"
            onChange={handleCurrentPage}
          /> */}
        </RootPageItem>
      </RootPage>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default inject('fileStore')(observer(Document));
