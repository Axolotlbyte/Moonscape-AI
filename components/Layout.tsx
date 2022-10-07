import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import NavBar from "./NavBar";
import Information from "./Information";
import { ToastContainer } from "react-toastify";


type Props = {
  children?: ReactNode;
  title?: string;
  nav?: string;
};

const Layout = ({
  children,
  title = "Moonscape : AI Text to Image Generator",
  nav = "overview",
}: Props) => (
  <div className="text-white h-auto bg-image gap-4 flex flex-col ">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header className="w-full bg-transparent p-4 text-3xl font-bold flex items-center justify-start gap-2">
      <Image
        src="/logo.png"
        alt="Picture of the author"
        width={75}
        height={75}
      />
      Moonscape
    </header>

    <Information />

    <NavBar current={nav} />

    <main className="w-full h-85p bg-transparent flex flex-col gap-4 items-center justify-center">
      {children}
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>

    <footer className="w-full flex items-center justify-center p-4 bg-transparent text-slate-300">
      <span>Moonscape™</span>
    </footer>

    <style jsx>{`
      .bg-image {
        background-image: url("/bg.png"); /* The image used */
        background-color: black; /* Used if the image is unavailable */
        width: 100%; /* You must set a specified height */
        height: 100%;
        background-attachment: fixed;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: fill; /* Resize the background image to cover the entire container */
      }
    `}</style>
  </div>
);

export default Layout;
