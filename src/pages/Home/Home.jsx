import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = `Home`;
  });

  return (
    <>
      <h1>
        either use Typewrite on home page or get rid of it in package.json
        https://www.npmjs.com/package/typewriter-effect
      </h1>
    </>
  );
};

export { Home };
