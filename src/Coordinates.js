import { useState } from "react";

export default function Coordinates() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Coordinates found"); // runs many times
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  });

  return (
    <div>
      {latitude}, {longitude}
    </div>
  );
}
