import { useEffect } from "react";
import { Introduction } from "./components/Introduction";
import { CommandsHelp } from "./components/CommandsHelp";
import { Faq } from "./components/Faq";

const Help = () => {
  useEffect(() => {
    document.title = `Help & Support`;
  });

  return (
    <div className="px-5 md:px-14 pt-10 pb-24">
      <Introduction />
      <CommandsHelp />
      <Faq />
    </div>
  );
};

export { Help };
