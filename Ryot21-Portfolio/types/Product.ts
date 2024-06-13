import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk"

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Product = {
  title: string;
  clientName: string;
  date: Date;
  tag: Tag[];
  description: string;
  url: string;
  thumbnail: MicroCMSImage;
  images: MicroCMSImage;
} & MicroCMSListContent;