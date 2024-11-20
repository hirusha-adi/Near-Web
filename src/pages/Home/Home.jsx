import { useEffect } from "react";
import { Introduction } from "./components/Introduction";
import { BackToTop } from "../../components";
import { Music } from "./components/Music";

const Home = () => {
  useEffect(() => {
    document.title = `Home`;
  });

  return (
    <>
      <Introduction />
      <Music />
      <BackToTop />
    </>
  );
};

export { Home };
