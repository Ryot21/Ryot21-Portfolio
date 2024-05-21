import type { MicroCMSImage, MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk"

export type Product = {
  title?: string;
  clientName?: string;
  date?: Date;
  category?: string;
  language?: string; 
  description?: string;
  url?: string;
  thumbnail?: MicroCMSImage;
  images?: MicroCMSImage;
};
