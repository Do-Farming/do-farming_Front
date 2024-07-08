import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import MyChallenging from './tabContens/myChallenging/MyChallenging';
import WaitingChallenging from './tabContens/waitingChallenging/WaitingChallenging';
import {
  CustomTabBar,
  CustomTabView,
  TabLabel,
} from './ChallengingTabView.styled';
import theme from '../../../styles/theme';
import { Group } from '../../../types/group/GroupTypes';

export default function ChallengingTabView({ myGroup }: { myGroup: Group }) {
  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case 'myChallenging':
        return <MyChallenging myGroup={myGroup} />;
      case 'waitingChallenging':
        return <WaitingChallenging myGroup={myGroup} />;
    }
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'myChallenging', title: '나의 챌린징', data: { myGroup } },
    {
      key: 'waitingChallenging',
      title: '대기중인 챌린징',
      data: { myGroup },
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
