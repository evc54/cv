export interface WorkImage {
  idx: number;
  alt: string;
}

export interface GalleryImage extends WorkImage {
  src: string;
  thumb1x: string;
  thumb2x: string;
}

export interface Achievement {
  part: string;
  text: string;
}

export interface Work {
  id: string;
  name: string;
  summary: string;
  detail: string[];
  achievements?: Achievement[];
  year: number;
  produced: number;
  tags: string[];
  images: WorkImage[];
  live?: string;
  git?: string;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  year: number;
  live: boolean;
  git: boolean;
}
