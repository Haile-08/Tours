import React from "react";

const Item = ({ name, img, nickname }) => {
  return (
    <>
      <div className="bg-gray-200 flex-row mx-5 my-5">
        <div className="flex justify-center items-start">
          <img src={img} alt={name} />
        </div>
        <div className="felx justify-center items-start">
          <h1>name: {name}</h1>
          <h5>nickname: {nickname}</h5>
        </div>
      </div>
    </>
  );
};

export default Item;
