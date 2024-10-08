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
  role: string;
}

declare interface Education {
  id: string;
  title: string;
  time: string;
  name: string;
  description: string;
  other?: string;
}

declare interface Social {
  $id: string;
  name: string;
  link: string;
  icon: string;
}
