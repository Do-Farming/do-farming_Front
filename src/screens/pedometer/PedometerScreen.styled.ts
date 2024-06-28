import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.whiteColor};
`;

export const ProgressCard = styled.View`
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`;

export const ProgressHeader = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const ProgressSmallHeader = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  text-align: left;
`;

export const ProgressBody = styled.View`
  align-items: center;
`;

export const StepCount = styled.Text`
  color: #ff8c00;
  font-weight: bold;
`;

export const ProgressBarContainer = styled.View`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 30px 0 20px 0;
`;

export const ProgressBar = styled.View<{ progress: number }>`
  width: ${(props) => props.progress + 4}%;
  height: 100%;
  background-color: #ff8c00;
`;

export const ProgressLabel = styled.View`
  position: absolute;
  bottom: -25px;
  margin-bottom: 8px;
  padding: 3px 5px;
  background-color: ${(props: any) =>
    props.bgColor}; /* 배경색을 prop으로 받음 */
  border-radius: 5px; /* border-radius 설정 */
  align-self: center;
`;

export const ProgressLabelText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 12px;
  white-space: nowrap; /* 텍스트가 한 줄에 머물도록 설정 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 ... 표시 */
  width: 32px;
`;

export const PinContainer = styled.View`
  position: absolute;
  bottom: 0;
  height: 100%;
  align-items: center;
`;

export const UserList = styled.View`
  margin-top: 20px;
`;

export const UserCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.whiteColor};
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const RankNumber = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  color: #ff8c00;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const UserName = styled.Text`
  font-size: 18px;
`;

export const AchievedGoal = styled.Text`
  font-size: 16px;
  color: #888888;
`;

export const InterestRate = styled.Text`
  font-size: 16px;
  color: red;
  font-weight: bold;
  margin-left: auto;
`;
