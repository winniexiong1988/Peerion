/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import WalletPage from 'containers/WalletPage/Loadable';
import MarketPage from 'containers/MarketPage/Loadable';
import PadPage from 'containers/PadPage/Loadable';
import BudsPage from 'containers/BudsPage/Loadable';
import TokenomicsPage from 'containers/TokenomicsPage/Loadable';

import Header from '../Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Peerion" defaultTitle="Peerion">
        <meta name="description" content="Peerion application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/market" component={MarketPage} />
        <Route path="/wallet" component={WalletPage} />
        <Route path="/pad" component={PadPage} />
        <Route path="/buds" component={BudsPage} />
        <Route path="/tokenomics" component={TokenomicsPage} />
        <Route path="" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
