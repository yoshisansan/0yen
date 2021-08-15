import microCMS from 'data/microcms.json'

export type MicroCMSType = typeof microCMS;
export type OnePostData = typeof microCMS[0];
export type PostStaticProps = { slug: string };

export interface ParentPostData {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  time: string;
  thumbnail: {
      url: string;
      height: number;
      width: number;
  };
  slug: string;
  genre: string[];
  isParent : boolean;
  beforeSlug?: undefined;
  afterSlug?: undefined;
  childData: OnePostData[];
}