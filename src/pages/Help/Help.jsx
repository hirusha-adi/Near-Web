import { useEffect } from "react";

const Help = () => {
  useEffect(() => {
    document.title = `Help & Support`;
  });

  return (
    <>
      <h1>Help</h1>
    </>
  );
};

export { Help };
