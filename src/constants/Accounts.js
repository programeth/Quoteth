import AngelouPortrait from 'assets/portraits/Angelou.png';
import BowiePortrait from 'assets/portraits/Bowie.png';
import DickensonPortrait from 'assets/portraits/Dickenson.png';
import FitzgeraldPortrait from 'assets/portraits/Fitzgerald.png';
import HeadPortrait from 'assets/portraits/Head.png';
import HemmingwayPortrait from 'assets/portraits/Hemmingway.png';
import JobsPortrait from 'assets/portraits/Jobs.png';
import KingPortrait from 'assets/portraits/King.png';
import LeePortrait from 'assets/portraits/Lee.png';
import LincolnPortrait from 'assets/portraits/Lincoln.png';

export const Hemmingway = {
  owner: "Ernest Hemmingway",
  address: "0x2036E853056950a5BE8e302c644Ec24869ba4773",
  image: HemmingwayPortrait
};
export const Bowie = {
  owner: "David Bowie",
  address: "0xeBA608e82369765907ABc4d63699C6FfF4D0cCBE",
  image: BowiePortrait
};
export const Fitzgerald = {
  owner: "F Scott Fitzgerald",
  address: "0x3C173302275d143865d51be5237E3a5758472af7",
  image: FitzgeraldPortrait
};
export const King = {
  owner: "Martin Luther King Jr",
  address: "0x8bd342c6975F22645ced7403feB1Ca202Bc66340",
  image: KingPortrait
};
export const Lee = {
  owner: "Harper Lee",
  address: "0xADECeC0AB55D8dDf2511b401d4E372D046D19FA6",
  image: LeePortrait
};
export const Angelou = {
  owner: "Maya Angelou",
  address: "0xd7DcAf3EeF4fAEd1ED905C62398392086a3A5Dd0",
  image: AngelouPortrait
};
export const Lincoln = {
  owner: "Abraham Lincoln",
  address: "0xe37B4D0269e96e8996Ab9d43a71c8944984ebD4B",
  image: LincolnPortrait
};
export const Jobs = {
  owner: "Steve Jobs",
  address: "0x63726FAb48c7D92139fFaB12e5F1c32C8264658F",
  image: JobsPortrait
};
export const Head = {
  owner: "Edith Head",
  address: "0x8FB76EDb9818F8db2F1c28cC8928799199B7E8eC",
  image: HeadPortrait
};
export const Dickenson = {
  owner: "Emily Dickenson",
  address: "0x65e73b57E26B3F19A2A75Fcb6a4dbb07AA462Be8",
  image: DickensonPortrait
};

const ACCOUNTS = [
  Angelou, Bowie, Dickenson, Fitzgerald, Head, Hemmingway, Jobs, King, Lee, Lincoln
];

export default ACCOUNTS;
