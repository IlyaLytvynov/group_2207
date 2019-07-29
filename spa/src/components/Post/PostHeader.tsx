import * as React from 'react';

interface PostHeaderProps {
  title: string;
}

export const PostHeader: React.FC<PostHeaderProps> = (props: PostHeaderProps) => {
  return <h2>{props.title}</h2>
};
