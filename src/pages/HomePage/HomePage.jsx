import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Collapse,
  CssBaseline,
  Button,
  Card,
  CardContent,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import LockIcon from '@material-ui/icons/Lock';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import bgGif from './images/bg.jpg';
import logoImage from './images/logo.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
    margin: 0,
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    background: `url('${bgGif}') center/cover no-repeat`,
    backgroundSize: 'cover',
    opacity: 0.9,
  },
  container: {
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '4.5rem',
    color: '#fff',
    marginBottom: theme.spacing(2),
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  drawerPaper: {
    width: '200px',
  },
  
  card: {
    width: '100%',
    padding: theme.spacing(3),
    textAlign: 'center',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(1),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  button: {
    padding: theme.spacing(2, 4),
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
  colorText: {
    color: '#5AFF3D',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around', // Added space between cards
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  equalSizeCard: {
    flex: '0 0 auto', // Each card takes equal space
    marginRight: theme.spacing(2), // Added space between cards
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
 
  },
  cardImage: {
    width: '200px',
    height: '200px',
  },
  ellipsisText: {
    fontStyle: 'italic',
    lineHeight: '1.6',
    maxWidth: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2, // Limit to 2 lines
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const history = useNavigate(); // Initialize the useHistory hook

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const altText = "Image Alt Text"; // Provide a suitable alt text

  const redirectToPage = (path) => {
    history(path); // Use the push method to navigate to the specified path
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.headerContainer} id="header">
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
            <img src={logoImage} alt="Logo" className={classes.logo} />
            <IconButton onClick={toggleDrawer}>
              <MenuIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Collapse in={true} timeout={1000} collapsedHeight={50}>
          <div className={classes.container}>
            <h1 className={classes.title}>
              Welcome to <br />
              Live Camera <span className={classes.colorText}>Hub.</span>
            </h1>
            <Scroll to="cardContainer" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
      </div>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <Scroll to="header" smooth={true}>
            <ListItem button>
              <Typography variant="body1">Home</Typography>
            </ListItem>
          </Scroll>
          <Scroll to="place-to-visit" smooth={true}>
            <ListItem button>
              <Typography variant="body1">Add camera</Typography>
            </ListItem>
          </Scroll>
          {/* Add more menu items as needed */}
        </List>
      </Drawer>

      {/* Corrected div */}
      <div className={classes.cardContainer} id="cardContainer">
      {/* New card with buttons and icon */}
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => redirectToPage('/addcamera')}
            >
              Add Camera
              <AddIcon className={classes.buttonIcon} />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => redirectToPage('/login')}
            >
              Login
              <LockIcon className={classes.buttonIcon} />
            </Button>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              onClick={() => redirectToPage('/customer-care')}
            >
              Customer Support
              <HeadsetMicIcon className={classes.buttonIcon} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

      <Container Width="100%" className={classes.cardContainer}>
      {/* First Card */}
      <Card className={classes.equalSizeCard}>
        <img src={img1} alt={altText} className={classes.cardImage} />
        <CardContent>
        <Typography variant="h6" gutterBottom className={classes.ellipsisText}>
          Integrity and privacy of digital imagery through robust camera 
        </Typography>
        </CardContent>
      </Card>

      {/* Second Card */}
      <Card className={classes.equalSizeCard}>
        <img src={img2} alt={altText} className={classes.cardImage} />
        <CardContent>
          <Typography variant="h6" gutterBottom className={classes.ellipsisText}>
            Artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed 
          </Typography>
        </CardContent>
      </Card>

      {/* Third Card */}
      <Card className={classes.equalSizeCard}>
        <img src={img3} alt={altText} className={classes.cardImage} />
        <CardContent>
          <Typography variant="h6" gutterBottom className={classes.ellipsisText}>
          Facial recognition in crime records enhances identification accuracy and aids law enforcement in criminal investigations.
          </Typography>
        </CardContent>
      </Card>
    </Container>
    </div>
  );
};

export default HomePage;