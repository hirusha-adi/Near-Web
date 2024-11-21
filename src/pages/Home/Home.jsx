import { useEffect } from "react";
import { Introduction } from "./components/Introduction";
import { BackToTop } from "../../components";
import { Music } from "./components/Music";
import { Osint } from "./components/Osint";
import { Other } from "./components/Other";

const Home = () => {
  useEffect(() => {
    document.title = `Home`;
  });

  return (
    <>
      <Introduction />
      <Music />
      <Osint />
      <Other />
      <BackToTop />
    </>
  );
};

export { Home };
