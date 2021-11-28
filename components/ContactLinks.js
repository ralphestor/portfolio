import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@mui/material/NoSsr';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff00',
    },
  },
});

const theme = createTheme({
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
      easing: {
        // This is the most common easing curve.
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // Objects enter the screen at full velocity from off-screen and
        // slowly decelerate to a resting point.
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        // Objects leave the screen at full velocity. They do not decelerate when off-screen.
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        // The sharp curve is used by objects that may return to the screen at any time.
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  });

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #1F583C 30%, #35CF82 90%);
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background: linear-gradient(45deg, #1F583C 30%, #35CF82 90%);;
    transform: scale(1.3);
  }
  `}
`;

const ContactLinks = (props) => {
    return (
        <NoSsr>
        <MuiThemeProvider theme={customTheme}>
          <ThemeProvider theme={customTheme}>
              <StyledAvatar>
                {props.content}
              </StyledAvatar>
          </ThemeProvider>
        </MuiThemeProvider>
      </NoSsr>
    );
}
 
export default ContactLinks;