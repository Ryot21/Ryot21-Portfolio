import type { MicroCMSImage, MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk"

export type Product = {
  name?: string;
  thumbnail?: MicroCMSImage;
  date?: Date;
  url?: string;
  category?: string;
  clientName?: string;
  description?: string;
  images?: MicroCMSImage;
};
