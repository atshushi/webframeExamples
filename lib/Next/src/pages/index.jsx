import React from "react";

const Home = function () {
  const [count, setCount] = React.useState(0);

  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      Clicked {count} {count === 1 ? "time" : "times"}
    </button>
  );
};

export default Home;
