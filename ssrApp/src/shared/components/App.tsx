import * as React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import {About} from '../containers'
import {Home} from '../containers'

export class App extends React.Component<any> {
  public render(): any {
    // @ts-ignore
    return <div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </nav>
      <Route
        path={'/'}
        exact={true}
        render={() => <Home />}/>
      <Route
        path={'/about'}
        render={() => <About />}/>
    </div>
  }
}
