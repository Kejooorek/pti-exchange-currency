import type { NextPage } from "next";
import Footer from "../components/Footer";
import HeadContainer from "../components/HeadContainer";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import DashBoard from "../components/DashBoard";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session);
  // if (status === "loading") return <h1>Loading</h1>;
  // if (!session) return <h1>not logged in</h1>;
  return (
    <>
      <Navbar></Navbar>
      <HeadContainer name={"Robert"}></HeadContainer>
      <DashBoard></DashBoard>
    </>
  );
};

export default Home;
