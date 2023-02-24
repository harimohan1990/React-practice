import ReactDOM from "react-dom/client";
import useFetch from "./CustomHook";

const DataMain = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/comments");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </>
  );
};

export default DataMain