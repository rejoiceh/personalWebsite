import { Url } from 'url';

export type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Service = {
  name: string;
  description: string;
  image: string;
};

export type Post = {
  id: number;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
  imageUrl: string;
  authorName: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
};
