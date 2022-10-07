const fileSaver = require("file-saver");
import { nanoid } from "nanoid";
import React from "react";
// import { saveAs } from "file-saver";

type Props = {
  url?: string;
};

const DownloadButton = ({ url }: Props) => {
  const downloadImage = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const id = nanoid();
    fileSaver.saveAs(url, `${id}.png`); // Put your image url here.
  };

  return (
    <button onClick={(e) => downloadImage(e)} className="p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </button>
  );
};

export default DownloadButton;
