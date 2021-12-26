import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { API_URL } from '../../config';
import axios from 'axios';
import { Button, createTheme, Paper, ThemeProvider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
  width: 80%;
  display: flex;
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

const Manage = (props) => {
  const classes = useStyles();
  const { AllFileData } = props.fileStore.toJS();
  useEffect(() => {
    const fetchData = () => {
      props.fileStore.getFile();
    };
    fetchData();
  }, [props.fileStore]);

  const handleDelete = (id) => {
    props.fileStore.deleteFile(id);
  };

  return (
    <ThemeProvider theme={theme}>
      <RootPage>
        <TableRoot>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: '#E32F12' }}>
                <TableRow>
                  <TableCell style={{ width: '50px' }} align="center">
                    <TableText> ลำดับ</TableText>
                  </TableCell>
                  <TableCell align="left">
                    <TableText>ชื่อหนังสือ</TableText>
                  </TableCell>
                  <TableCell style={{ width: '150px' }} align="center">
                    <TableText> action</TableText>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {AllFileData.map((file, index) => (
                  <TableRow
                    key={file._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="left">{file.FileName}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleDelete(file._id)}
                      >
                        ลบไฟล์
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TableRoot>
      </RootPage>
    </ThemeProvider>
  );
};

export default inject('fileStore')(observer(Manage));
