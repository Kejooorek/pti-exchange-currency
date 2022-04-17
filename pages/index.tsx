import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import HeadContainer from "../components/HeadContainer";
import MainContainer from "../components/MainContainer";
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
      <HeadContainer name={user.name}></HeadContainer>
      <MainContainer></MainContainer>
    </>
  );
};

export default Home;
