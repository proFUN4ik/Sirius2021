import React from 'react';
import { createUseStyles } from 'react-jss';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import smile from './smile.png';
import './anim.css';
import './font.css';
import { CSSTransitionGroup } from 'react-transition-group';

const mediaWidth = {
  smallScreen: 1500,
  tablet: 1200,
  phone: 800,
  smallPhone: 600,
};

const useStyles = createUseStyles({
  '@global' : {
    body: {
      font: '14px "Roboto", sans-serif',
      'font-weight': 300,
      margin: 30,
    },
  },
  'flex-container': {
    margin: 0,

    display: 'flex',
    'justify-content': 'space-between',
  },
  container: {
    'font-size': 100,

    margin: {
      top: 95,
      left: 200,
      right: 200,
      bottom: 95,
    },
  },
  emoji: {
    width: 205,
    height: 205,
    margin: {
      top: 53,
    }
  },
  smile: {
    width: '100%',
    height: 'auto',
  },
  'user-name': {
    'text-align': 'left',
  },

  [`@media (max-width: ${mediaWidth.smallScreen}px)`]: {
    container: {
      'font-size': 75,

      margin: {
        top: 95,
        left: 175,
        right: 175,
      }
    }
  },

  [`@media (max-width: ${mediaWidth.tablet}px)`]: {
    container: {
      margin: {
        top: 80,
        left: 0,
        right: 0,
      },
    },
    
    'flex-container': {
      'flex-direction': 'column-reverse',
    },

    'user-name': {
      'text-align': 'center',
    },

    emoji: {
      margin: 'auto',
    }
  },

  [`@media (max-width: ${mediaWidth.phone}px)`]: {
    'user-name': {
      'font-size': 60,
    },
    
    emoji: {
      width: 100,
      height: 100,
    },
  },

  [`@media (max-width: ${mediaWidth.smallPhone}px)`]: {
    'user-name': {
      'font-size': 40,
    },
    
    emoji: {
      width: 80,
      height: 80,
    },
  },
})

const useAnimation = createUseStyles({
  jelloAnim: {
    animation: 'infinite jello 5s',
  }
})

const Smile = () => {
  const anim = useAnimation();
  const classes = useStyles();

  return (
    <div className={anim.jelloAnim + ' ' + classes.emoji}>
      <img src={smile} className={classes.smile}/>
    </div>
  )
}

const JinguLogo = () => {
  return (
    <img src={logo} />
  )
}

const NameText = () => {
  const classes = useStyles();
  const name = "Egor Khramov";
  return (
    <div className={classes["flex-container"]}>
        <p className={classes["user-name"]}>{name}</p>
        <JinguLogo />
      </div>
  )
}

const Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NameText />
      <Smile />
    </div>
  )
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
