import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://breakingbadapi.com/api/characters",
    })
      .then(function (res) {
        setData(res.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-gray-300 flex-row justify-center items-center">
            <div className=" h-auto flex justify-center items-center">
              <div className=" font-mono text-5xl my-10">
                <h1>Breaking bad</h1>
                <hr className="bg-blue-500 px-5 py-0.5 mx-8 rounded my-2" />
              </div>
            </div>
            <div className="h-auto flex-row px-20 justify-center items-center">
              {data.map((index) => (
                <Item data={index} key={index.char_id} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
