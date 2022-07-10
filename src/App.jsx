import { Button, IconButton, Typography } from '@mui/material';
import ItemCard from './components/ItemCard';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Typography variant='h1'>Hello!</Typography>
      </header>
      <ItemCard />
    </div>
  );
};

export default App;
