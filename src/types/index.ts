export interface Expert {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
}

export interface Category {
  name: string;
}

export interface Image {
  uri: string;
}

export interface Podcast {
  name: string;
  length: number;
  image: Image;
  categories: Category[];
  experts: Expert[];
}

export interface ContentData {
  contentCards: {
    edges: Podcast[];
  };
}
