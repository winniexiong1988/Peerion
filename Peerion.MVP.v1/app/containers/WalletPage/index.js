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
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { setPageName } from 'containers/App/actions';
import Flex from 'components/Flex';
import StyledButton from 'components/Button/StyledButton';
import reducer from './reducer';
import saga from './saga';
import SideMenu from '../SideMenu';
import PersonsStats from '../PersonsStats';
import { requestBalance } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class WalletPage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      eth: 0.0,
      tree: 0.0,
      hype: 0.0,
      block: '',
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.props.onPageLoad('wallet');
  }

  onSearch() {
    const { block } = this.state;
    this.props.requestBalance(block);
  }

  render() {
    const { eth, hype, tree, block } = this.state;
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
            <div>
              <input
                text={block}
                placeholder="Block explorer"
                onChange={e => {
                  this.setState({ block: e.target.value });
                }}
              />
              <StyledButton onClick={this.onSearch}>Search</StyledButton>
            </div>
            <p>ETH: {eth}</p>
            <p>TREE: {hype}</p>
            <p>HYPE: {tree}</p>
          </Frame>
        </Flex>
      </article>
    );
  }
}

WalletPage.propTypes = {
  onPageLoad: PropTypes.func,
  requestBalance: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: name => dispatch(setPageName(name)),
    requestBalance: block => dispatch(requestBalance(block)),
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
)(WalletPage);

const Frame = styled.div`
  flex: auto;
  border: 2px solid gray;
  margin: 1em 0;
`;
