export interface PostModel {
  id: number;
  author: string;
  header: string;
  description: string;
  comment: Comments[];
}

export interface Comments {
  id: number;
  author: string;
  description: string;
  time: Date;
}

