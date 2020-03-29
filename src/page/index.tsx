import './index.pcss';
import React, { lazy, Suspense, useContext, useState, useEffect } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';

import cards from '../config/cards';
import particlesConfig from '../config/particles.json';
import perfetchImg from '../utils/perfetchImg';
import useUser from '../hooks/useUser';
import { IUserInfo, getUserInfo } from '../api';
import { Toast } from 'antd-mobile';

const Words = lazy(() => import(/* webpackChunkName: "words" */ './words'));
// const Poster = lazy(() => import(/* webpackChunkName: "poster" */ './poster'));
// const Lottery = lazy(() => import(/* webpackChunkName: "lottery" */ './lottery'));
// const Random = lazy(() => import(/* webpackChunkName: "random" */ './random'));
// const Reward = lazy(() => import(/* webpackChunkName: "reward" */ './reward'));
// const Particles = lazy(() => import(/* webpackChunkName: "Particles" */ 'react-particles-js'));

interface IMainCtx {}
export const MainCtx = React.createContext<IMainCtx>({});

// try {
//   const allImg: string[] = [];
//   cards.forEach(({ icon, poster }) => {
//     allImg.push(icon.clicked, icon.default, poster.front, poster.back);
//   });
//   perfetchImg(allImg);
// } catch (e) {}

export default () => {
  const [loading, setLoading] = useState(true);
  const [globalError, setGlobalError] = useState(false);
  const [userInfo, setUserInfo] = useState({} as IUserInfo);

  useEffect(() => {
  }, []);

  return (
    <div className="coral-main">
      <MainCtx.Provider value={{}}>
        <Suspense fallback="Loading...">
          <HashRouter>
            <Switch>
              <Route path="/words" component={Words} />
              <Redirect from='/' to='/words' />
            </Switch>
          </HashRouter>
        </Suspense>
      </MainCtx.Provider>
    </div>
  )
};
