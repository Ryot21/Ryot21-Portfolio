import type { MicroCMSImage, MicroCMSListContent, MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk"
import type { Tag } from "./tag"

export type Product = {
  title?: string;
  clientName?: string;
  date?: Date;
  type?: (MicroCMSListContent & Tag) | null;
  description?: string;
  url?: string;
  thumbnail?: MicroCMSImage;
  images?: MicroCMSImage;
};
