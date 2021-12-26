import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { API_URL } from '../../config';
import axios from 'axios';
import {
  Button,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { observer, inject } from 'mobx-react';
import { Box } from '@mui/system';

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
const useStyles = makeStyles((theme) => ({
  input: {
    width: '45vw',
  },
}));

const RootPage = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
const TitleText = styled.h3`
  font-size: 20px;
`;

const CreateFile = (props) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [docNum, setDocNum] = useState('');
  const [FileData, setFileData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(docNum);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('docNumber', docNum);
    formData.append('uploadFile', FileData);
    const { data } = await axios.post(`${API_URL}/admin/create`, formData);
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <RootPage onSubmit={handleSubmit}>
        <TitleText>เพิ่มรายการ</TitleText>
        <TextField
          id="name"
          name="name"
          label="ชื่อหนังสือ"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          className={classes.input}
        />
        <TextField
          id="docNumber"
          name="docNumber"
          label="ที่หนังสือ"
          variant="outlined"
          onChange={(e) => setDocNum(e.target.value)}
          className={classes.input}
        />
        <Box display="flex" flexDirection="row" gap="10px">
          <p>อัพโหลดเอกสาร:</p>
          <input
            name="uploadFile"
            type="file"
            onChange={(e) => setFileData(e.target.files[0])}
          />
        </Box>

        <Button type="submit" variant="contained" style={{ width: '150px' }}>
          อัพโหลด
        </Button>
      </RootPage>
    </ThemeProvider>
  );
};

export default inject('fileStore')(observer(CreateFile));
