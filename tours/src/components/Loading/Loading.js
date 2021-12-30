import React, { useState } from "react";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading() {
  let [color, setColor] = useState("#36D745");
  return (
    <React.Fragment>
      <main className="main bg-slate-700 w-screen h-screen flex flex-col justify-center items-center">
        <h1 className=" text-2xl  text-white ">
          <PacmanLoader color={color} css={override} size={60} />
        </h1>
      </main>
    </React.Fragment>
  );
}

export default Loading;
