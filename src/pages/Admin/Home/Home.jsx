import { isUserLoggedIn, user } from "../../../lib/backend";

const Home = () => {
  console.log(isUserLoggedIn);
  console.log(user.model.name);
  console.log(user.token);

  return <>Page</>;
};

export { Home };
