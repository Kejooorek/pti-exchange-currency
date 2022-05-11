import type { NextPage } from "next";
import Footer from "../components/Footer";
import HeadContainer from "../components/HeadContainer";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import DashBoard from "../components/DashBoard";
import { ReactQueryCacheProvider, QueryCache, useQuery } from "react-query";
import LoginBoard from "../components/LoginBoard";
import LoadingCircle from "../components/LoadingCircle";
const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <LoadingCircle></LoadingCircle>;
  if (!session) return <LoginBoard></LoginBoard>;

  return (
    <>
      <Navbar></Navbar>
      <HeadContainer name={session!.user!.name}></HeadContainer>
      <DashBoard></DashBoard>
    </>
  );
};

export default Home;
