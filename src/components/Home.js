import React, { useState, useEffect } from "react";
import Card from "./Card";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => setData(res.slice(0, 50)));
  }, []);
  return (
    <div class="container">
      <div className="row">
        {data.map((i) => {
          return <Card id={i.id} title={i.title} img={i.thumbnailUrl} />;
        })}
      </div>
    </div>
  );
}
