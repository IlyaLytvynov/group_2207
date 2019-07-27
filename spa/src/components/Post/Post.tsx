import * as React from 'react';
import { PostHeader } from './PostHeader';

interface PostProps {
  headerText: string;
  content: string;
}

const Post = (props: PostProps) => {
  return <div className={ 'post' } style={ { backgroundColor: 'red' } }>
    <PostHeader title={props.headerText }/>
    <p>{ props.content }</p>
  </div>;
};

export { Post };
