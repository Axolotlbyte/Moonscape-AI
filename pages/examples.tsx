import type { NextPage } from "next";
import IOComponent from "../components/IOComponent";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const examples = [
    { title: "eye", img: "/examples/eye.png" },
    { title: "multicolor hyperspace", img: "/examples/hyperspace.png" },
    {
      title: "phase shift into an era of human+AI art collab",
      img: "/examples/aiart.png",
    },
    {
      title: "a gentleman otter in a 19th century portrait",
      img: "/examples/otter.png",
    },
  ];
  return (
    <Layout title="Moonscape : AI Text to Image Generator | Examples" nav="examples">
      {examples.map((example) => (
        <IOComponent readOnly key={example.title} title={example.title} img={example.img} />
      ))}
    </Layout>
  );
};

export default Home;
