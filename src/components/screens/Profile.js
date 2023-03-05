import React from 'react';
import styled from 'styled-components';

function Profile() {
  return (
    <ProfileBox className='Profile'>
      <Content> Coming Soon.....! </Content>
    </ProfileBox>
  );
};

export default Profile;

const ProfileBox = styled.div`
    width: 67.5%;
    height: 65%;
    position:absolute;
    top: 20%;
    left: 9%;
    color: #f46801;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled.h3`
    font-size: 35px;
    @media all and  (max-width:1380px) {
      font-size: 30px;
    }
    @media all and  (max-width:1380px) {
      font-size: 25px;
    }
`;