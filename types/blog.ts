import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import type { Book } from "./book";

export type Blog = {
  title?: string;
	subTitle?: string;
  date?: Date;
	category?: string;
  text?: string;
  book: (MicroCMSListContent & Book) | null;
  thumbnail?: MicroCMSImage;
  images?: MicroCMSImage;
};
