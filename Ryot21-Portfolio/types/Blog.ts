import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import type { Book } from "./book";

export type Blog = {
  date?: Date;
	category?: string;
	title?: string;
	subTitle?: string;
  images?: MicroCMSImage;
  text?: string;
  book: (MicroCMSListContent & Book) | null;
};
