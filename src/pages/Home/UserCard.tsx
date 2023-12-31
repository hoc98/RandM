import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
interface UserCardProps {
  cardData: object | undefined;
}


const UserCard: React.FC<UserCardProps> = ({ cardData }) => {

  return (
    <Card sx={{ maxWidth: 345 ,bgcolor:'#17f0a0' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= { (cardData as any)?.image }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          { (cardData as any)?.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
export default UserCard