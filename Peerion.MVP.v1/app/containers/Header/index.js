import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import reducer from '../App/reducer';

import NavBar from './NavBar';
import H1 from '../../components/H1';
import messages from './messages';

import { makeSelectName } from '../App/selectors';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { appName } = this.props;
    return (
      <div>
        <NavBar>
          <H1>{appName && <FormattedMessage {...messages[appName]} />}</H1>
        </NavBar>
      </div>
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
)(Header);
