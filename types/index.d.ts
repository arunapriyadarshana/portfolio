declare interface Technology {
  $id: string;
  name: string;
  img: string;
}

declare interface Project {
  id: string;
  title: string;
  subTitle?: string;
  duration?: string;
  description?: string;
  links?: Link[];
  img: string;
  stack: Technology[];
}

declare interface Education {
  id: string;
  title: string;
  time: string;
  name: string;
  description: string;
  other?: string;
}
