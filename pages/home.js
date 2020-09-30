import React, { useEffect, useState } from "react";
import axios from "axios";
function home() {
  const [data, setdata] = useState();
  useEffect(() => {
    axios
      .get("/api/tips")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => alert(JSON.stringify(err, null, 2)));
  }, [data]);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default home;
