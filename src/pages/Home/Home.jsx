import { useEffect } from "react";
import { Introduction } from "./components/Introduction";
import { BackToTop } from "../../components";
import { Music } from "./components/Music";
import { Osint } from "./components/Osint";

const Home = () => {
  useEffect(() => {
    document.title = `Home`;
  });

  return (
    <>
      <Introduction />
      <Music />
      <Osint />
      <BackToTop />
    </>
  );
};

export { Home };
