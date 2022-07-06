import { AddShoppingCart } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Typography variant='h1'>Hello!</Typography>
        <IconButton>
          <AddShoppingCart />
        </IconButton>
      </header>
    </div>
  );
};

export default App;
