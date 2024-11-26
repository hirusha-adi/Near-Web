import { useEffect } from "react";
import { DrawerAndLayout } from "../../components/DrawerAndLayout";

const Lavalink = () => {
  useEffect(() => {
    document.title = `Lavalink Settings | Near`;
  });

  return (
    <>
      <DrawerAndLayout pageTitle={"Lavalink Settings"} locationBreadcrumbs={["Settings", "Lavalink"]}>
        Page
      </DrawerAndLayout>
    </>
  );
};

export { Lavalink };
