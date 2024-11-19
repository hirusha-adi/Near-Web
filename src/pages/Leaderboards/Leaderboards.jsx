import { useEffect } from "react";

const Leaderboards = () => {
  useEffect(() => {
    document.title = `Leaderboards`;
  });

  return (
    <>
      <h1>Leaderboards</h1>
    </>
  );
};

export { Leaderboards };
