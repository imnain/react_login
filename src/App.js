import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { Box, Paper, Container, Grid, TextField, Typography } from '@mui/material';

const paperStyle = {padding:20, height:'70vh', width:280, margin:"20px auto"}
const buttonStyle = {marginTop:20}

function App() {
  return (
      <Container maxWidth="sm">

      <Grid>
        <Paper elevation={10} style ={paperStyle}>
          <Grid align='center'>
          <h2> signin</h2>
          <TextField id='standard-basic' label = 'Email' variant='standard' type = 'email' fullWidth/>
      <TextField id='standard-basic' label = 'Password' variant='standard' type='password' fullWidth/>
      <Button
     color='secondary'
     variant='contained'
     fullWidth
     style={buttonStyle}
     >Submit</Button>
          </Grid>
        </Paper>
      </Grid>
      </Container>
      
     
      
      
     
  );
}

export default App;
