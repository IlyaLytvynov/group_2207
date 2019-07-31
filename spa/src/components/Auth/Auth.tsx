import { RouteComponentProps } from 'react-router';
import * as React from 'react';

export const Auth: React.FC<RouteComponentProps> = ({location}) => {
  console.log(location);
  debugger;
  if(location.search.indexOf('code') !== -1) {
    const code = location.search.split('=')[1];
    console.log(code);
    return <div>{code}</div>;
  }
  return null;
};
