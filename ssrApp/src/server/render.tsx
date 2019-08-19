import { Request } from 'express';
import * as React from 'react';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { getPageTemplate } from './template';
import { App } from '../shared/components/App';
import configureStore from '../shared/store';
import { INITIAL_STATE as AUTH_INIT_STATE } from '../shared/store/auth';
import { INITIAL_STATE as HOME_INIT_STATE } from '../shared/store/home/reducer';
import { INITIAL_STATE as IMAGES_INIT_STATE } from '../shared/store/images';
import { Provider } from 'react-redux';

const render = async (req: Request) => {
  const authData = AUTH_INIT_STATE;
  const homeData = HOME_INIT_STATE;
  const imagesData = IMAGES_INIT_STATE;

  const store = configureStore({
    auth: authData,
    home: homeData,
    images: imagesData
  });

  console.log(store);
  const app = renderToString(
    <Provider store={store}>
    <StaticRouter location={req.url} context={{}}>
        <App/>
    </StaticRouter>
    </Provider>
  );

  return getPageTemplate(store, app);
};

export default render;



