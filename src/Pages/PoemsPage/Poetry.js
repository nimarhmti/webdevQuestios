import React, { useState } from "react";

function Poetry({ poems }) {
  const [poetry, setPoetry] = useState();
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const changePoemsHandler = () => {
    const getRandomRange = getRandomInt(poems.length);
    const filteredPoems = poems.filter((item) => item.id === getRandomRange);
    setPoetry(...filteredPoems);
  };
  let Contet = "";
  if (!poetry) {
    Contet = (
      <div className="poemsList">
        <p>برای نمایش فال روی کلید زیر کلیک کنید</p>
        <button className="poems-btn" onClick={changePoemsHandler}>
          فال من را نشان بده
        </button>
      </div>
    );
  } else {
    Contet = (
      <div className="poemsList">
        <ul>
          {poetry.poetry.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="mean-section">
          <p>تفسیر : {poetry.mean}</p>
        </div>
        <button className="poems-btn" onClick={changePoemsHandler}>
          فال من را نشان بده
        </button>
      </div>
    );
  }
  return <>{Contet}</>;
}

export default Poetry;
