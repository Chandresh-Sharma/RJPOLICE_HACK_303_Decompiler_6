import React from 'react';

const LoginLandingPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <link rel="stylesheet" href="styles.css" />
        <title>Interactive Map</title>
      </head>
      <body>
        <div className="container">
          <div className="search-container">
            <input type="text" id="searchInput" placeholder="Search..." />
            <button onClick={() => search()}>Search</button>
          </div>
          <div className="dropdown-container">
            <label htmlFor="tagSelect">Select Tag:</label>
            <select id="tagSelect">
              <option value="tag1">Tag 1</option>
              <option value="tag2">Tag 2</option>
              <option value="tag3">Tag 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div id="map"></div>
        </div>
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <script src="script.js"></script>
      </body>
    </html>
  );
};

export default LoginLandingPage;
