'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import PlayIcon from './svg/PlayIcon';
import SkipIcon from './svg/SkipIcon';

import ArticleBackground from './ArticleBackground';
import PauseIcon from './svg/PauseIcon';
import UNVillageIcon from '../../public/un-village.png';
import BeenThroughIcon from '../../public/been-through.png';
import MysteryIcon from '../../public/mystery.png';

import SpotifyIcon from '../../public/spotify.png';

const tracks = [
  {
    title: 'UN Village',
    src: '/UNVillage.mp3',
    artistAndAlbum: 'Baekhyun — City Lights',
    thumbnail: UNVillageIcon,
  },
  {
    title: 'Been Through',
    src: '/BeenThrough.mp3',
    artistAndAlbum: 'Exo - Universe',
    thumbnail: BeenThroughIcon,
  },
  {
    title: 'Mystery',
    src: '/Mystery.mp3',
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
    <ArticleBackground className="h-[728px] flex flex-col items-center gap-y-14 relative overflow-hidden z-10">
      <div
        className={`bg-black absolute h-10 w-10 top-12 right-12 border-2 duration-500 -z-10 ${
          mouseOver || playing ? 'scale-[50]' : ''
        }`}
      />

      <Image
        src={SpotifyIcon}
        alt=""
        height="64"
        width="64"
        className="absolute top-10 right-10 z-10"
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
          className={`font-bold duration-500 ${
            mouseOver || playing ? 'text-white' : 'text-black'
          }`}
        >
          {tracks[trackIndex].title}
        </div>
        <div className="text-[#FC324E] font-semibold">
          {tracks[trackIndex].artistAndAlbum}
        </div>
      </div>
      <div
        className={`${
          mouseOver || playing
            ? 'text-white border-white'
            : 'text-[#828282] border-[#BDBDBD]'
        } duration-500 flex flex-row justify-center items-center w-60 gap-x-10 h-12 border-2 rounded-[200px]`}
      >
        <SkipIcon
          className="cursor-pointer"
          onClick={() => setTrackIndex((trackIndex - 1) % 3)}
        />
        {playing ? (
          <PauseIcon
            className="cursor-pointer"
            onClick={() => {
              audioRef.current?.pause();
              setPlaying(false);
            }}
          />
        ) : (
          <PlayIcon
            className="cursor-pointer"
            onClick={() => {
              audioRef.current?.play();
              setPlaying(true);
            }}
          />
        )}
        <SkipIcon
          onClick={() => setTrackIndex((trackIndex + 1) % 3)}
          className="rotate-180 cursor-pointer"
        />
      </div>

      <audio ref={audioRef} src={tracks[trackIndex].src}>
        <track kind="captions" />
      </audio>
    </ArticleBackground>
  );
};
export default SpotifyMusic;
