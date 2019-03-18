import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import reducer from '../App/reducer';

import SideBar from './SideBar';
import Button from './Button';
import messages from './messages';

import { makeSelectName } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
class SideMenu extends React.Component {
  render() {
    const { appName } = this.props;
    return (
      <SideBar>
        <Button activated={appName === 'home'} href="/home">
          <FormattedMessage {...messages.home} />
        </Button>
        <Button activated={appName === 'market'} href="/market">
          <FormattedMessage {...messages.market} />
        </Button>
        <Button activated={appName === 'wallet'} href="/wallet">
          <FormattedMessage {...messages.wallet} />
        </Button>
        <Button activated={appName === 'your_pad'} href="/pad">
          <FormattedMessage {...messages.your_pad} />
        </Button>
        <Button activated={appName === 'your_buds'} href="/buds">
          <FormattedMessage {...messages.your_buds} />
        </Button>
        <Button activated={appName === 'tokenomics'} href="/tokenomics">
          <FormattedMessage {...messages.tokenomics} />
        </Button>
      </SideBar>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  appName: makeSelectName(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(SideMenu);
