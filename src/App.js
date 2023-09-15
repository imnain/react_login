import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div>
      <TextField id='standard-basic' label = 'Email' variant='standard' type = 'email' />
      </div>
      <div>
      <TextField id='standard-basic' label = 'Password' variant='standard' type='password' />
      </div>
      <div>
      <Button
     color='secondary'
     variant='outlined'
     >Submit</Button>
      </div>
     
    </div>
  );
}

export default App;
