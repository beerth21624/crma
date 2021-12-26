import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'tomato',
    background:
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://images.unsplash.com/photo-1511989130945-c2b632959395?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'Fixed',
    minHeight: 'calc(100vh - 130px)',
    paddingTop: '50px',
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: '60px 25px',
    borderRadius: '20px',
  },
}));
function Register(props) {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(
      yup.object().shape({
        username: yup
          .string('กรุณากรอกชื่อผู้ใช้')
          .required('กรุณากรอกชื่อผู้ใช้'),
        email: yup.string('กรุณากรอกอีเมล').required('กรุณากรอกอีเมล'),
        password: yup
          .string('กรุณากรอกรหัสผ่าน')
          .min(8, 'กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัว')
          .required('กรุณากรอกรหัสผ่าน'),
      })
    ),
  });

  console.log(errors);

  const onSubmit = (data) => {
    props.authStore.fetchRegister(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className={classes.root}>
        <Container component="main" maxWidth="xs" className={classes.card}>
          <CssBaseline />
          <Box
            sx={{
              //   marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ลงทะเบียน
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                {...register('username')}
              />
              {errors.username && (
                <Typography color="red">{errors.username.message}</Typography>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                {...register('email')}
              />
              {errors.email && (
                <Typography color="red">{errors.email.message}</Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                {...register('password')}
              />
              {errors.password && (
                <Typography color="red">{errors.password.message}</Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ลงทะเบียน
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/login">{"Don't have an account? login"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
export default inject('authStore')(observer(Register));
