import { Metadata } from "next";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRCMServices {
  key: string;
  id: number;
  title: string;
  description: string;
  icon: any;
  image: string;
  color: string;
  link: string;
  benefits: string[];
}

export interface IRCMWhyChooseUs {
  title: string;
  description: string;
  icon: any;
  color: string;
}

export type DataType = {
  key: string;
  value: string;
};
export interface MetaDataType {
  title: string;
  data: DataType[];
}

export type ISiteMetaData = Record<string, Metadata>;
