import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.whiteColor};
`;

export const Header = styled.View`
  background-color: ${(props) => props.theme.mainColor};
  height: 38%;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 24px 24px;
  position: relative;
  margin-bottom: 20%;
`;

export const Profile = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 25px;
`;

export const ProfileName = styled.Text`
  margin-top: 10px;
  font-size: 13px;
  font-weight: bold;
`;

export const Menu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
  position: absolute;
  bottom: -54px;
`;

export const MenuItem = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const MenuItemButton = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 1);
  elevation: 4;
`;

export const MenuItemImage = styled.Image`
  width: 32px;
  height: 32px;
`;

export const MenuItemText = styled.Text`
  margin-top: 5px;
  font-size: 14px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px 0;
`;

export const Tab = styled.Text<{ active?: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.active ? '#FFD700' : '#000')};
  border-bottom-width: ${(props) => (props.active ? '2px' : '0')};
  border-bottom-color: ${(props) => (props.active ? '#FFD700' : 'transparent')};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #e0e0e0;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.whiteColor};
  padding: 10px;
  border-radius: 8px;
`;

export const ItemImage = styled.View`
  width: 50px;
  height: 50px;
  background-color: #c0c0c0;
  border-radius: 4px;
`;

export const ItemInfo = styled.View`
  margin-left: 10px;
  flex-direction: column;
`;

export const ItemText = styled.Text`
  font-size: 14px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #333;
  padding: 10px 0;
`;

export const FooterItem = styled.Text`
  color: ${(props) => props.theme.whiteColor};
  font-size: 24px;
`;
