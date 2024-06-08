"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import UNVillageIcon from "@public/un-village.png";
import BeenThroughIcon from "@public/been-through.png";
import MysteryIcon from "@public/mystery.png";
import SpotifyIcon from "@public/spotify.png";
import PlayIcon from "../svg/PlayIcon";
import SkipIcon from "../svg/SkipIcon";

import ArticleBackground from "./ArticleBackground";
import PauseIcon from "../svg/PauseIcon";

const tracks = [
  {
    title: "UN Village",
    src: "/UNVillage.mp3",
    artistAndAlbum: "Baekhyun — City Lights",
    thumbnail: UNVillageIcon,
  },
  {
    title: "Been Through",
    src: "/BeenThrough.mp3",
    artistAndAlbum: "Exo - Universe",
    thumbnail: BeenThroughIcon,
  },
  {
    title: "Mystery",
    src: "/Mystery.mp3",
    artistAndAlbum: `Raveena - Asha's Awakening`,
    thumbnail: MysteryIcon,
  },
];

const SpotifyMusic = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    if (playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  return (
    <ArticleBackground className="relative z-10 flex h-full flex-col items-center gap-y-14 overflow-hidden  p-4">
      <div
        className={`absolute right-12 top-12 -z-10 h-10 w-10 bg-black duration-500 ${
          mouseOver || playing ? "scale-[50]" : ""
        }`}
      />

      <Image
        src={SpotifyIcon}
        alt=""
        height="64"
        width="64"
        className="absolute right-10 top-10 z-10"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      />

      <Image
        src={tracks[trackIndex].thumbnail}
        alt=""
        height="280"
        width="280"
        className="mt-36 shadow-lg"
      />
      <div className="flex flex-col text-center text-xl">
        <div
          className={`font-bold duration-500 dark:text-white ${
            mouseOver || playing ? "text-white" : "text-black"
          }`}
        >
          {tracks[trackIndex].title}
        </div>
        <div className="font-semibold text-[#FC324E]">
          {tracks[trackIndex].artistAndAlbum}
        </div>
      </div>
      <div
        className={`${
          mouseOver || playing
            ? "border-white text-white"
            : "border-[#BDBDBD] text-[#828282]"
        } flex h-12 w-60 flex-row items-center justify-center gap-x-10 rounded-[200px] border-2 duration-500`}
      >
        <SkipIcon
          className="cursor-pointer dark:text-white"
          onClick={() => setTrackIndex((trackIndex - 1 + 3) % 3)}
        />
        {playing ? (
          <PauseIcon
            className="cursor-pointer dark:text-white"
            onClick={() => {
              audioRef.current?.pause();
              setPlaying(false);
            }}
          />
        ) : (
          <PlayIcon
            className="cursor-pointer dark:text-white"
            onClick={() => {
              audioRef.current?.play();
              setPlaying(true);
            }}
          />
        )}
        <SkipIcon
          onClick={() => setTrackIndex((trackIndex + 1) % 3)}
          className="rotate-180 cursor-pointer dark:text-white"
        />
      </div>

      <audio ref={audioRef} src={tracks[trackIndex].src}>
        <track kind="captions" />
      </audio>
    </ArticleBackground>
  );
};
export default SpotifyMusic;
