import { useEffect } from "react";
import { DrawerAndLayout } from "../../components/DrawerAndLayout";

const Bot = () => {
  useEffect(() => {
    document.title = `Bot Settings | Near`;
  });

  return (
    <>
      <DrawerAndLayout pageTitle={"Bot Settings"} locationBreadcrumbs={["Settings", "Bot"]}>
        Page
      </DrawerAndLayout>
    </>
  );
};

export { Bot };
