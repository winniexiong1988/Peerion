/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { setPageName } from 'containers/App/actions';
import Flex from 'components/Flex';
import Post from 'components/Post';
import SingleFrame from 'components/SingleFrame';

import reducer from './reducer';
import saga from './saga';
import SideMenu from '../SideMenu';
import PersonsStats from '../PersonsStats';

/* eslint-disable react/prefer-stateless-function */
export class PadPage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.onPageLoad('your_pad');
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard(Home Page)" />
        </Helmet>
        <PersonsStats />
        <Flex>
          <SideMenu />
          <SingleFrame>
            <Post />
          </SingleFrame>
        </Flex>
      </article>
    );
  }
}

PadPage.propTypes = {
  onPageLoad: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: name => dispatch(setPageName(name)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PadPage);
