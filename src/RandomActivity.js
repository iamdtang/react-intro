import { useState, useEffect } from "react";

export default function RandomActivity() {
  const [activity, setActivity] = useState();

  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setActivity(data.activity);
      });
  }, []);

  return <div>{activity}</div>;
}
