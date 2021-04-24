import { createContext } from 'react'

type Episode = {
  title: String;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  toogglePlay: () => void;
  play: (episode: Episode) => void;
}

export const PlayerContext = createContext({} as PlayerContextData)