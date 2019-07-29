import * as React from 'react';
import { PostHeader } from './PostHeader';
import { PostProps } from './Post.props';

const Post = (props: PostProps) => {
  return <div className={ 'post' } style={ { backgroundColor: 'red' } }>
    <PostHeader title={props.headerText }/>
    <p>{ props.content }</p>
  </div>;
};

export { Post };
