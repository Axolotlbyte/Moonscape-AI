import React, { useEffect, useState } from "react";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import RingLoader from "react-spinners/RingLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { postPrompt, getImage } from "../utility/request";

// const override = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "white",
// };

type Props = {
  readOnly?: boolean;
  title?: string;
  img?: string;
};

const IOComponent = ({ readOnly, title, img }: Props) => {
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [outputImg, setOutputImg] = useState<string>("/default.png");

  const toastify = (type: string) => {
    if (type === "error") {
      return toast.error("An Error Occurred", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      return toast.success("Successfully Ran The Model", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const data = await postPrompt(prompt);
      setTimeout(async () => {
        try {
          const img = await getImage(data.urls.get);
          if (!img[0] || img[0].length === 0) {
            toastify("error");
            return setOutputImg("/default.png");
          }
          setOutputImg(img[0]);
          setLoading(false);
          return toastify("success");
        } catch (error) {
          console.log(error);
          setOutputImg("/default.png");
          toastify("error");
          return setLoading(false);
        }
      }, 5500);
      return;
    } catch (error) {
      console.log(error);
      setOutputImg("/default.png");
      toastify("error");
      return setLoading(false);
    }
  };

  return readOnly ? (
    <>
      {/* <div className="flex justify-end w-11/12 mx-auto">
        <DownloadButton url={img} />
      </div> */}
      <div className="w-11/12 relative aspect-square bg-slate-600 mx-auto mt-14 rounded-lg overflow-hidden">
        <Image
          src={img ? img : "/default.png"}
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <label className="w-11/12 mx-auto pt-4 text-lg font-semibold">
        {" "}
        Prompt
        <input
          className="w-full mx-auto mt-2 border-2 border-slate-600 p-2 bg-transparent rounded-lg"
          placeholder="A Surreal Moonscape"
          type={"text"}
          value={title}
          readOnly
        />
      </label>
      <hr className=" w-11/12 mt-4 border-slate-600 " />
    </>
  ) : (
    <>
      <div className="flex justify-end w-11/12 lg:w-1/2 mx-auto">
        <DownloadButton url={outputImg} />
      </div>
      <div className="w-11/12 lg:w-1/2 relative flex items-center justify-center aspect-square bg-slate-600 mx-auto rounded-lg overflow-hidden">
        {loading ? (
          <RingLoader color="white" size={100} />
        ) : (
          <Image
            src={outputImg}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return handleSubmit();
        }}
        className="w-11/12 lg:w-1/2"
        method="POST"
      >
        <label className="mx-auto pt-8 text-lg font-semibold">
          {" "}
          Prompt
          <span className="flex mt-2 border-2 border-slate-600 rounded-lg">
            <input
              className="w-full mx-auto p-2 bg-transparent "
              placeholder="A Surreal Moonscape"
              type={"text"}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
            <input className="hidden" type={"submit"} />
          </span>
        </label>
      </form>
    </>
  );
};

export default IOComponent;
