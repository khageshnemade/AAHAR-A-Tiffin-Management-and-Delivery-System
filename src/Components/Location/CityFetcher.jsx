import React, { useState } from "react";
import axios from "axios";

function CityFetcher() {
  const [pincode, setPincode] = useState("");
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${pincode}&key=3e51e82fdae347f4b059eda67be2eebb`
      );

      const latitude = response.data.results[0].geometry.lat;
      const longitude = response.data.results[0].geometry.lng;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter pin code"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <button onClick={fetchLocation}>Fetch Location</button>
      {location && (
        <div>
          Latitude: {location.latitude}
          Longitude: {location.longitude}
        </div>
      )}
    </div>
  );
}

export default CityFetcher;
