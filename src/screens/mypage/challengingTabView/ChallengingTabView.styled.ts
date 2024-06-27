import styled from 'styled-components/native';
import { TabView, TabBar } from 'react-native-tab-view';

export const CustomTabView = styled(TabView)``;

export const CustomTabBar = styled(TabBar)`
  background: white;
  font-weight: bold;
  shadow-offset: 0px 0px;
  shadow-color: transparent;
`;

export const TabLabel = styled.Text<{ focused: boolean }>`
  color: ${(props) => (props.focused ? 'black' : 'gray')};
  font-size: ${(props) => (props.focused ? '15px' : '13px')};
  text-align: center;
  width: 150px;
`;
