import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import useStyles from './styles';

const AddCamera = () => {
  const classes = useStyles();
  const history = useNavigate();

  const submitForm = () => {
    // Perform additional validation or AJAX request to submit data to the backend
    alert("Form submitted!");
    history('/');
    
  };

  const checkLiveFeed = () => {
    // Implement logic to check live feed availability
    const liveFeedURL = document.getElementById('liveFeedURL').value;

    // Perform AJAX request or other checks to verify live feed
    alert("Checking live feed for URL: " + liveFeedURL);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.heading}>
        Camera Information Form
      </Typography>
      <form className={classes.form} id="cameraForm">
        {/* Owner Information */}
        <InputLabel className={classes.label} htmlFor="ownerName">
          Owner's Full Name:
        </InputLabel>
        <TextField
          type="text"
          id="ownerName"
          name="ownerName"
          className={classes.input}
          required
        />

        <InputLabel className={classes.label} htmlFor="ownerAddress">
          Owner's Address:
        </InputLabel>
        <TextareaAutosize
          id="ownerAddress"
          name="ownerAddress"
          rowsMin={4}
          className={classes.input}
          required
        />

        <InputLabel className={classes.label} htmlFor="ownerContact">
          Owner's Contact Number:
        </InputLabel>
        <TextField
          type="tel"
          id="ownerContact"
          name="ownerContact"
          pattern="[0-9]{10}"
          placeholder="1234567890"
          className={classes.input}
          required
        />

        <InputLabel className={classes.label} htmlFor="ownerEmail">
          Owner's Email Address:
        </InputLabel>
        <TextField
          type="email"
          id="ownerEmail"
          name="ownerEmail"
          className={classes.input}
          required
        />

        {/* Camera Information */}
        <InputLabel className={classes.label} htmlFor="cameraType">
          Camera Type:
        </InputLabel>
        <FormControl className={classes.input}>
          <Select id="cameraType" name="cameraType" required>
            <MenuItem value="ip">IP Camera</MenuItem>
            <MenuItem value="cctv">CCTV Camera</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        {/* Add other form fields... */}

        {/* Live Feed URL */}
        <InputLabel className={classes.label} htmlFor="liveFeedURL">
          URL for Live Feed:
        </InputLabel>
        <div className={classes.liveFeedContainer}>
          <TextField
            type="text"
            id="liveFeedURL"
            name="liveFeedURL"
            placeholder="Enter live feed URL"
            className={classes.liveFeedInput}
            required
          />
          <Button
            type="button"
            className={classes.checkLiveFeedButton}
            onClick={checkLiveFeed}
          >
            Check Live Feed
          </Button>
        </div>

        {/* Submit Button */}
        <Button type="button" onClick={submitForm} className={classes.button}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddCamera;
