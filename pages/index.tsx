import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import HelloPage from "../components/helloPage";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) return <h1>Loading...</h1>;

  if (error || !user) return <h1>Login or SignIn</h1>;

  return (
    <>
      <Navbar></Navbar>
      <UserProfile picture={user.picture} name={user.name}></UserProfile>
      {/* <HelloPage name={user.name} picture={user.picture} email={user.email} /> */}
    </>
  );
};

export default Home;
