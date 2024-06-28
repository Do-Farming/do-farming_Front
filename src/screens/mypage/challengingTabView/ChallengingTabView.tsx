import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import MyChallenging from './tabContens/myChallenging/MyChallenging';
import WaitingChallenging from './tabContens/waitingChallenging/WaitingChallenging';
import {
  CustomTabBar,
  CustomTabView,
  TabLabel,
} from './ChallengingTabView.styled';
import theme from '../../../styles/theme';

const renderScene = SceneMap({
  myChallenging: MyChallenging,
  waitingChallenging: WaitingChallenging,
});

export default function ChallengingTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'myChallenging', title: '나의 챌린징' },
    {
      key: 'waitingChallenging',
      title: '대기중인 챌린징',
    },
  ]);

  return (
    <CustomTabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <CustomTabBar
          {...props}
          indicatorStyle={{
            backgroundColor: `${theme.mainColor}`,
            borderWidth: 0,
            height: 5,
          }}
          pressColor={'transparent'}
          renderLabel={({ route, focused }) => (
            <TabLabel focused={focused}>{route.title}</TabLabel>
          )}
        />
      )}
    />
  );
}
