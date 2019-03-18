import React from 'react';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import styled from 'styled-components';
import H3 from 'components/A';
import Flex from 'components/Flex';
import reducer from '../App/reducer';

/* eslint-disable react/prefer-stateless-function */
class PersonsStats extends React.Component {
  render() {
    return (
      <Frame>
        <AvatarFrame>
          <div>
            <Avatar src="https://www.sumasmountaindental.com/wp-content/uploads/2018/02/empty.avatar.scaled.jpg" />
          </div>
          <H3>LV 1</H3>
        </AvatarFrame>
        <TextArea defaultValue="Persons stats" />
      </Frame>
    );
  }
}

// const mapStateToProps = createStructuredSelector({});

// const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  // withSaga,
  // withConnect,
)(PersonsStats);

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border: 2px solid gray;
`;
const TextArea = styled.textarea`
  flex: auto;
  text-align: center;
`;

const Frame = styled(Flex)`
  border: 2px solid gray;
`;

const AvatarFrame = styled.div`
  border-right: 2px solid gray;
  padding: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
