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
import styled from 'styled-components';
import reducer from './reducer';
import saga from './saga';
import SideMenu from '../SideMenu';
import PersonsStats from '../PersonsStats';

/* eslint-disable react/prefer-stateless-function */
export class BudsPage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.onPageLoad('your_buds');
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
          <Frame>
            <div>Your buds</div>
            <div>
              <Avatar src="https://www.sumasmountaindental.com/wp-content/uploads/2018/02/empty.avatar.scaled.jpg" />
              <Avatar src="https://www.sumasmountaindental.com/wp-content/uploads/2018/02/empty.avatar.scaled.jpg" />
              <Avatar src="https://www.sumasmountaindental.com/wp-content/uploads/2018/02/empty.avatar.scaled.jpg" />
            </div>
            <div>Your Markets</div>
            <div>
              <Avatar src="https://www.sumasmountaindental.com/wp-content/uploads/2018/02/empty.avatar.scaled.jpg" />
              <Avatar src="https://www.sumasmountaindental.com/wp-content/uploads/2018/02/empty.avatar.scaled.jpg" />
            </div>
          </Frame>
        </Flex>
      </article>
    );
  }
}

BudsPage.propTypes = {
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
)(BudsPage);

const Frame = styled.div`
  margin: 1em 0;
  border: 3px solid gray;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border: 2px solid gray;
`;
