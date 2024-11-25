import { isUserLoggedIn, user } from "../../../lib/backend";
import { DrawerAndLayout } from "../components/DrawerAndLayout";

const Home = () => {
  return (
    <>
      <DrawerAndLayout>
        Page Content Here!
      </DrawerAndLayout>
    </>
  );
};

export { Home };
