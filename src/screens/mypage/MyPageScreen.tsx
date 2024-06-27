import React, { useState } from 'react';
import {
  Container,
  Header,
  Profile,
  ProfileImage,
  ProfileName,
  Menu,
  MenuItem,
  MenuItemImage,
  MenuItemText,
  MenuItemButton,
} from './MyPageScreen.styled';
import ChallengingTabView from './challengingTabView/ChallengingTabView';
import MyAccountView from './myAccountView/MyAccountView';

export default function MyPageScreen({ navigation }: any) {
  const [selectedView, setSelectedView] = useState('challenging');

  return (
    <Container>
      <Header>
        <Profile>
          <ProfileImage source={require('../../assets/1.png')} />
          <ProfileName>홍길동님</ProfileName>
        </Profile>
        <Menu>
          <MenuItem>
            <MenuItemButton
              onPress={() => {
                setSelectedView('challenging');
              }}
            >
              <MenuItemImage source={require('../../assets/challenging.png')} />
            </MenuItemButton>
            <MenuItemText>챌린징</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemButton
              onPress={() => {
                setSelectedView('myAccount');
              }}
            >
              <MenuItemImage source={require('../../assets/myaccount.png')} />
            </MenuItemButton>
            <MenuItemText>내 계좌</MenuItemText>
          </MenuItem>
        </Menu>
      </Header>
      {selectedView === 'challenging' ? (
        <ChallengingTabView />
      ) : (
        <MyAccountView />
      )}
    </Container>
  );
}
