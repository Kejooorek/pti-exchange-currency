import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import HeadContainer from "../components/HeadContainer";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <h1>Loading...</h1>;

  if (error || !user) return <h1>Login or SignIn</h1>;
  return (
    <>
      <Navbar></Navbar>
      <HeadContainer name={user.name}></HeadContainer>
      <MainContainer name={user.name} picture={user.picture}></MainContainer>
      <Footer></Footer>
    </>
  );
};

export default Home;
