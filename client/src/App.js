import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  return (
    <>
      <div className="bg-gray-300 flex-row justify-center items-center">
        <div className=" h-auto flex justify-center items-center">
          <div className=" font-mono text-5xl my-10">
            <h1>our tours</h1>
            <hr className="bg-blue-500 px-5 py-0.5 mx-8 rounded my-2" />
          </div>
        </div>
        <div className="h-auto flex justify-center items-center">
          <Item />
        </div>
      </div>
    </>
  );
}

export default App;
