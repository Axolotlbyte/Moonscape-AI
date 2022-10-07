import type { NextPage } from "next";
import IOComponent from "../components/IOComponent";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <IOComponent />
    </Layout>
  );
};

export default Home;
