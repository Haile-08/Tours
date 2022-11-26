import React from "react";

const Item = (data) => {
  return (
    <>
      <div className="bg-gray-200 flex-row mx-5 my-5">
        <div className="flex justify-center items-start">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="felx justify-center items-start">
          <h1>name: {data.name}</h1>
          <h5>nickname: {data.nickname}</h5>
        </div>
      </div>
    </>
  );
};

export default Item;
