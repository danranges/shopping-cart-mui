import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { maxWidth } from '@mui/system';

const ItemCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: 'none',
        boxSizing: 'border-box',
      }}
    >
      <CardMedia
        component={'img'}
        alt='mastia shoe'
        image='src/assets/mastia.jpeg'
      />
      <CardContent>
        <Typography variant='h5'>MASTIA</Typography>
        <Typography variant='body1'>2149 kr</Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
