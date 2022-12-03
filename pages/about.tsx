import type { NextPage } from "next";
import IOComponent from "../components/IOComponent";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Moonscape : AI Text to Image Generator | About" nav="about">
      <div className="h-screen overflow-hidden w-11/12 mx-auto">
        <p>
          Stable Diffusion is a text-to-image latent diffusion model created by
          the researchers and engineers from CompVis, Stability AI and LAION. It
          is trained on 512x512 images from a subset of the LAION-5B database.
          LAION-5B is the largest, freely accessible multi-modal dataset that
          currently exists.
          <br />
          Latent diffusion models are based on a rather simple idea: instead of
          applying the diffusion process directly on a high-dimensional input,
          we project the input into a smaller latent space and apply the
          diffusion there.
          <br />
          <br />
          This is a fullstack project that uses Next.js for the front-end and An
          ML model running on the back-end server of a hosting service known as
          Replicate.
          <br />
          <br />
          Stable Diffusion, allows users to create whatever they want. Creative
          freedom sounds amazing but yeah, I can already see how it can cause
          all kinds of issues in our imperfect society. On the bright side, it’s
          been fascinating to watch how people leverage this technology to
          create AI-generated everything, from paintings and ads to entire
          movies and audio-reactive AI-generated artwork. And its capabilities
          go well beyond that: the Stable Diffusion model is used in medicine
          now to diagnose patients or in business to create personalized visual
          assistants. Developers and creators all over the world jumped at the
          opportunity to create new AI-powered experiences, services, and
          products. So if you thought that these ML models are only capable of
          creating nice pictures, think again.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
