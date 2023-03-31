import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SCITS" src="https://i.pinimg.com/originals/34/1f/69/341f692bfa16f0ae4924efea9c161e43.png" />
          </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute Of Technological Science "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7 CGPA
              </Typography>
              {" — B.Tech Computer Science and Engeneering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="PJC" src="https://i.pinimg.com/originals/34/1f/69/341f692bfa16f0ae4924efea9c161e43.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Padmasri Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                82%CGPA
              </Typography>
              {" — Intermediate studies with Computers & Commerce"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SSVHS" src="https://i.pinimg.com/originals/34/1f/69/341f692bfa16f0ae4924efea9c161e43.png" />
          </ListItemAvatar>
        <ListItemText
          primary="Sri Sharadha Vidyanikethan High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                87% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}