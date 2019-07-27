import * as React from 'react';
import { SyntheticEvent } from 'react';
import injectSheet from 'react-jss'
import styles from './AddPostForm.styles';

interface Props {
  classes: {[key: string]: any},
  onAddPost: (post: {header: string; text: string}) => void;
}

interface State {
  header: string;
  text: string;
}

class AddPostForm extends React.PureComponent<Props, State> {
  public state = {
    header: '',
    text: ''
  };

  private onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddPost(this.state)
  };

  private onChange = (field: string) => {
    return (e: SyntheticEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      const value = e.currentTarget.value;
      this.setState((state: State) => {
        const newState = Object.create(state);
        newState[field] = value;
        return newState;
      });
    };
  };

  public render() {
    return <form onSubmit={ this.onSubmit }>
      <input
        className={this.props.classes.field}
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
