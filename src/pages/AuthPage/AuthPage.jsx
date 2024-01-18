import React, { useState } from 'react';
import { Container, Paper, Typography, Link, Button, Grid } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

const initialState = { email: '', password: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const history = useNavigate(); // Initialize useHistory

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered username and password are "admin"
    if (form.email.trim().toLowerCase() === 'admin@gmail.com' && form.password === 'admin') {
      // Route to the admin page
      history('/admin'); // Make sure you have the '/admin' route defined in your routes
    } else {
      // Route to the landing page
      history('/landingpage'); // Replace with the actual landing page route
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h4" align="center" className={classes.title}>
          {isSignup ? 'Request Account' : 'Sign in'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
            )}
          </Grid>
          <Link href="#" className={classes.link}>
            Forgot Password
          </Link>
          <Grid item>
            <Link onClick={switchMode} className={classes.link}>
              {isSignup ? 'Already have an account? Sign in' : 'Request Account'}
            </Link>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
