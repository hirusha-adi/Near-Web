import { isUserLoggedIn, user } from "../../../lib/backend";

const Home = () => {
  console.log(isUserLoggedIn);
  console.log(user);

  return <>Page</>;
};

export { Home };
