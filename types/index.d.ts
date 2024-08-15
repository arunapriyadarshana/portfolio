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
