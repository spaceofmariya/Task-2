import React from 'react';
import styled from 'styled-components';

function Settings() {
  return (
    <SettingsBox className='Settings'>
      <Content> Coming Soon.....! </Content>
    </SettingsBox>
  );
};

export default Settings;

const SettingsBox = styled.div`
width: 67.5%;
height: 65%;
position:absolute;
top: 20%;
left: 9%;
color: #f46801;
`;
const Content = styled.h3`
font-size: 35px;
`;
