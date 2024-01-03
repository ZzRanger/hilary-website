"use client";

import PhotoIcon from "@/components/svg/PhotoIcon";
import HeartIcon from "@/components/svg/HeartIcon";
import MapIcon from "@/components/svg/MapIcon";
import TequilaIcon from "@/components/svg/TequilaIcon";

import Image from "next/image";
import { useState } from "react";
import TaiwanPhoto from "@public/taiwan.png";
import HeartPhoto from "@public/heartphoto.png";
import TequilaPhoto from "@public/tequilaphoto.png";

export default function ImageSelector() {
  const [buttonState, setButtonState] = useState(0);

  return (
    <div className="relative">
      <Image
        src={TaiwanPhoto}
        priority
        alt=""
        className={`${buttonState !== 0 ? "hidden" : ""}`}
      />

      <Image
        src={HeartPhoto}
        priority
        alt=""
        className={`${buttonState !== 1 ? "hidden" : ""}`}
      />

      <Image
        src={TequilaPhoto}
        priority
        alt=""
        className={`${buttonState !== 2 ? "hidden" : ""}`}
      />

      <PhotoIcon className="absolute right-10 top-8 duration-200 hover:shadow-2xl" />
      <ImagePillSelector
        buttonState={buttonState}
        setButtonState={setButtonState}
      />
    </div>
  );
}

const marginMap = ["left-[2%]", "left-[32%]", "left-[64%]"];
function ImagePillSelector({
  buttonState,
  setButtonState,
}: {
  buttonState: number;
  setButtonState: (num: number) => void;
}) {
  return (
    <div
      style={{
        backdropFilter: "blur(21px)",
        boxSizing: "border-box",
        position: "absolute",
        width: "60%",
        height: "11%",
        left: "20%",
        bottom: "16%",
        background:
          "radial-gradient(97.57 % 210.75 % at 0.9 % 2.98 %, rgba(255,255,255,0.4) 0 %,    rgba(255,255,255,0) 100 %           )",
        borderRadius: "27.5px",
      }}
      className="relative flex flex-row items-center justify-around px-2 shadow-2xl"
    >
      <span
        className={`absolute z-0 h-[80%] w-[35%] rounded-[300px] bg-white duration-200 ${marginMap[buttonState]} delay-75`}
      />
      <MapIcon
        onClick={() => setButtonState(0)}
        className={`z-10 h-min w-[8%] cursor-pointer text-[#828282] delay-100 ${
          buttonState === 0 ? "text-[#828282]" : "text-white"
        }`}
      />
      <HeartIcon
        onClick={() => setButtonState(1)}
        className={`z-10 h-min w-[8%] cursor-pointer text-[#828282] delay-100 ${
          buttonState === 1 ? "text-[#828282]" : "text-white"
        }`}
      />
      <TequilaIcon
        onClick={() => {
          setButtonState(2);
        }}
        className={`z-10 h-min w-[8%] cursor-pointer text-[#828282] delay-100 ${
          buttonState === 2 ? "text-[#828282]" : "text-white"
        }`}
      />
    </div>
  );
}
