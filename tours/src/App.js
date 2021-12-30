import React, { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import "./App.css";
import axios from "axios";

function App() {
  //the useState hooks
  const [idea, setIdea] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setcount] = useState(0);

  //Data fetching function
  async function fetchdata() {
    try {
      const res = await axios.get("http://www.boredapi.com/api/activity/");
      setIdea(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("data not fetched" + `   ${error}`);
    }
  }

  // useEffect hook
  useEffect(() => {
    fetchdata();
  }, [count]);

  // btn management
  function clicked() {
    setcount(count + 1);
  }
  //main return
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <main className="main w-screen h-screen bg-slate-700 flex flex-col justify-center items-center">
        <div className="cont container w-50 py-auto px-48 bg-lime-400 flex flex-col justify-center items-center rounded-lg">
          <h1 className="mag text-black text-9xl font-mono">bored api</h1>
          <div>
            <h1>Idea = {idea.activity}</h1>
            <a href={`${idea.link}`}></a>
          </div>
          <button
            className="btn px-12 py-9 bg-blue-800 my-9 rounded-lg"
            onClick={clicked}
          >
            Change
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
