import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export default function GetRequest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((items) => {
      setData(items.data);
    });
  });

  
  return (
    <div>
      {data?.map((list) => {
        console.log("list", list);
        return <div>{list.title}</div>;
      })}
    </div>
  );
}
