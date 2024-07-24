import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk"

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Product = {
  title: string;
  clientName: string;
  genre: string;
  date: Date;
  tag: Tag[];
  description: string;
  url: string;
  thumbnail: MicroCMSImage;
  // images: MicroCMSImage;
  images: {
    workImage:MicroCMSImage;
    // workImage:{
    //   url:string;
    // };
  };

} & MicroCMSListContent;