import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/styles';
import Burger from './Burger';
import Link from 'next/link';

const MyButton = styled(Button)({
    backgroundColor: '#ffffff00',
    border: 0,
    borderRadius: 20,
    color: '#FFFFFF',
    height: 36,
    width: 36,
    padding: 0,
    padding: '0 30px',
  });

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        backgroundColor: 'rgba(53, 207, 130)',
        height: '100%'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <Link href="/#home">
          <ListItem 
            button 
            key="Home"
            sx={{
              height: 70,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }
            }}
          >
              <ListItemText 
                primary="Home"
                sx={{
                  textAlign: 'center',
                  color: '#ffffff',
                }}
              />
          </ListItem>
          </Link>

          <Link href="/#about">
          <ListItem 
            button 
            key="About"
            sx={{
              height: 70,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }
            }}
          >
              <ListItemText 
                primary="About"
                sx={{
                  textAlign: 'center',
                  color: '#ffffff'
                }}
              />
          </ListItem>
          </Link>

          <Link href="/#projects">
          <ListItem 
            button 
            key="Projects"
            sx={{
              height: 70,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }
            }}
          >
              <ListItemText 
                primary="Projects"
                sx={{
                  textAlign: 'center',
                  color: '#ffffff'
                }}
              />
          </ListItem>
          </Link>

          <Link href="/#contacts">
          <ListItem 
            button 
            key="Contacts"
            sx={{
              height: 70,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }
            }}
          >
              <ListItemText 
                primary="Contacts"
                sx={{
                  textAlign: 'center',
                  color: '#ffffff'
                }}
              />
          </ListItem>
          </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MyButton 
            onClick={toggleDrawer(anchor, true)}
          >
                <Burger/>
          </MyButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}