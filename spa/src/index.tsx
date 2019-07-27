import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Post } from './components/Post';
import { AddPostForm } from './components/AddPostForm/AddPostForm';

class App extends React.Component {
  state = {
    posts: [
      {
        id: (Date.now() + Math.floor(Math.random() * 10000)).toString(),
        header: 'Hello wortld 1',
        content: 'lorem cxasdasdas'
      },
      {
        id: (Date.now() + Math.floor(Math.random() * 10000)).toString(),
        header: 'Hello wortld 2',
        content: 'lorem cxasdasdas'
      },
      {
        id: (Date.now() + Math.floor(Math.random() * 10000)).toString(),
        header: 'Hello world 3',
        content: 'lorem cxasdasdas'
      }
    ]
  };

  private addPost = (post: { header: string; text: string;}) => {
    console.log('>>>', post);
  }

  render() {
    return <div>
      <AddPostForm onAddPost={this.addPost}/>
      { this.state.posts.map(post => <Post key={ post.id } headerText={ post.header } content={ post.content }/>) }
    </div>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
