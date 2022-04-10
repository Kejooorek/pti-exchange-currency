import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import HelloPage from "../components/helloPage";
const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) <h1>Loading...</h1>;

  if (error || !user) return <h1>Error</h1>;
  return (
     <HelloPage name={user.name} picture={user.picture} email={user.email} />
  );
};

export default Home;
