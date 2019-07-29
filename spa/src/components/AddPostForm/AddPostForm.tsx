import * as React from 'react';
import { SyntheticEvent } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import styles from './AddPostForm.styles';
import { PostModel } from '../../models/Post';

interface Props {
  onAddPost: (post: PostModel) => void;
}

interface State {
  header: string;
  text: string;
}

class AddPostForm extends React.PureComponent<Props & WithSheet<typeof styles>, State> {
  public state = {
    header: '',
    text: ''
  };

  private onSubmit = (e) => {
    e.preventDefault();
    const {header, text} = this.state;
    this.props.onAddPost(new PostModel(header, text));
  };

  private onChange = (field: string) => {
    return (e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.currentTarget.value;
      this.setState((state: State) => {
        const newState = Object.create(state);
        newState[field] = value;
        return newState;
      });
    };
  };

  public render() {
    const { classes } = this.props;

    return <form onSubmit={ this.onSubmit } className={classes.root}>
      <input
        className={ classes.field }
        value={ this.state.header }
        onChange={ this.onChange('header') }
        type='text'
        placeholder='Header'/>
      <textarea
        onChange={ this.onChange('text') }
        value={ this.state.text }
        name='' id=''
        cols={ 30 }
        rows={ 10 }/>
      <button>SUBMIT</button>
    </form>;
  }
}


const StyledAddPostForm = injectSheet(styles)(AddPostForm);

export { StyledAddPostForm as AddPostForm };
