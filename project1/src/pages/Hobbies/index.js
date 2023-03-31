import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://th.bing.com/th/id/OIP.VcFCAoe9QF3kFj7hcaJ8MAHaEK?pid=ImgDet&rs=1',
    title: 'Music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.9ck1SFa8oqDdEFA8_8LDpgAAAA?pid=ImgDet&rs=1',
    title: 'playing Indoor Games',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'photography',
    
  },
  {
    img: 'https://cdn.freeyork.org/wp-content/uploads/2020/03/q-motcavpbm.jpg',
    title: 'Traveling',
    
    cols: 2,
  },

];