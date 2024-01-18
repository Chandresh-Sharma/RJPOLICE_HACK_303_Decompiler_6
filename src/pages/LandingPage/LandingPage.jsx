import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cameraImg from "./camera_icon.png";

const cameraIcon = new L.Icon({
  iconUrl: cameraImg,
  iconSize: [16, 16],
  iconAnchor: [8, 16],
  popupAnchor: [0, -16],
});

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  searchContainer: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  dropdownContainer: {
    marginBottom: theme.spacing(2),
  },
  map: {
    height: '400px',
  },
  uploadButton: {
    marginTop: theme.spacing(2),
  },
}));

const MapComponent = () => {
  const classes = useStyles();
  const [selectedModel, setSelectedModel] = useState('');
  const [showAdditionalDropdown, setShowAdditionalDropdown] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState('');

  const search = () => {
    console.log('Searching...');
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
    setShowAdditionalDropdown(Boolean(model));
    setSelectedCamera('');
  };

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <TextField id="searchInput" label="Search..." variant="outlined" />
        <Button variant="contained" color="primary" onClick={search}>
          Search
        </Button>
      </div>
      <div className={classes.dropdownContainer}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="modelSelect-label">Select Model:</InputLabel>
          <Select
            labelId="modelSelect-label"
            id="modelSelect"
            value={selectedModel}
            onChange={handleModelChange}
            label="Select Model"
          >
            <MenuItem value="motionDetection">Motion Detection</MenuItem>
            <MenuItem value="faceRecognition">Face Recognition</MenuItem>
            <MenuItem value="accidentDetection">Accident Detection</MenuItem>
            <MenuItem value="objectDetection">Object Detection</MenuItem>
          </Select>
        </FormControl>
      </div>

      {showAdditionalDropdown && (
        <div className={classes.dropdownContainer}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="cameraSelect-label">Select Camera:</InputLabel>
            <Select
              labelId="cameraSelect-label"
              id="cameraSelect"
              value={selectedCamera}
              onChange={handleCameraChange}
              label="Select Camera"
            >
              <MenuItem value="Camera1">Camera 1: John Doe</MenuItem>
              {/* Add more camera options as needed */}
            </Select>
          </FormControl>
        </div>
      )}

      {showAdditionalDropdown && selectedModel === 'faceRecognition' && (
        <div className={classes.uploadButton}>
          <Button variant="contained" color="primary">
            Upload Image
          </Button>
        </div>
      )}

      <MapContainer center={[26.9124, 75.7873]} zoom={13} className={classes.map}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[26.9124, 75.7873]} icon={cameraIcon}>
          <Popup>
            <div>
              <h3>Camera Information</h3>
              <p>
                <strong>Live Stream:</strong>{" "}
                <a href="http://192.168.137.158:8080/" target="_blank" rel="noopener noreferrer">
                  Click here
                </a>
                <br />
                <strong>Latitude:</strong> 26.9124<br />
                <strong>Longitude:</strong> 75.7873<br />
                <strong>Owner:</strong> John Doe
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
