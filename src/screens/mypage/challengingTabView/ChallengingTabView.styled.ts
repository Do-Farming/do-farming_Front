import styled from 'styled-components/native';
import { TabView, TabBar } from 'react-native-tab-view';

export const CustomTabView = styled(TabView)`
  margin-top: 8px;
`;

export const CustomTabBar = styled(TabBar)`
  background: white;
  font-weight: bold;
  shadow-offset: 0px 0px;
  shadow-color: transparent;
`;

export const TabLabel = styled.Text<{ focused: boolean }>`
  color: ${(props) => (props.focused ? 'black' : 'gray')};
  font-size: ${(props) => (props.focused ? '17px' : '14px')};
  padding-bottom: 5px;
  text-align: center;
  font-weight: 600;
  width: 150px;
`;
