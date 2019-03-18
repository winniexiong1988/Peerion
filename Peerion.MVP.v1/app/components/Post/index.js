import React from 'react';
import styled from 'styled-components';
import H3 from 'components/A';
import Flex from 'components/Flex';

/* eslint-disable react/prefer-stateless-function */
class Post extends React.Component {
  render() {
    return (
      <Frame>
        <AvatarFrame>
          <div>
            <Avatar src="https://www.sumasmountaindental.com/wp-content/uploads/2018/02/empty.avatar.scaled.jpg" />
          </div>
          <Level>LV 1</Level>
        </AvatarFrame>
        <Text>Examples post</Text>
      </Frame>
    );
  }
}

export default Post;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border: 2px solid gray;
`;
const Frame = styled(Flex)`
  margin: 0.5em;
`;
const AvatarFrame = styled.div`
  display: flex;
  flex-direction: column;
}
`;
const Level = styled(H3)`
  text-align: center;
  border: 2px solid gray;
  margin-top: 0.5em;
`;
const Text = styled(H3)`
  flex: auto;
  text-align: center;
  margin-left: 0.5em;
  border: 2px solid gray;
`;
