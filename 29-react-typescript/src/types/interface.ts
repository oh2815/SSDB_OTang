export interface TodoItemInterface {
  id: number;
  text: string;
  done: boolean;
}

export interface MatzipInterface {
  idx?: number;
  imgSrc: string;
  title: string;
  desc: string;
}

export interface PostItemProps {
  postid: number;
  posttitle: string;
  postbody: string;
}

export interface PostItemInterface {
  id: number;
  title: string;
  body: string;
}
