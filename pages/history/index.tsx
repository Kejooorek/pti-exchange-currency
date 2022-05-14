import { useSession } from "next-auth/react";
import React from "react";
import LoginBoard from "../../components/LoginBoard";

const History = () => {
  // const { data: session, status } = useSession();

  // if (status === "loading") return <LoadingCircle></LoadingCircle>;
  // if (!session) return <LoginBoard></LoginBoard>;

  return <div>index</div>;
};

export default History;
