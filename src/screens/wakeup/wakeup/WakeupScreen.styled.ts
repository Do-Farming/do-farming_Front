import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.grayColor};
  height: 100vh;
`;

export const MissionInfo = styled.Text`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 800;
`;

export const MissionTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
`;

export const CameraButton = styled.Pressable`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  padding: 15px;
  margin-top: 24px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
`;

export const CameraText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const CompetitionContainer = styled.View`
  background-color: #dcdcdc;
  min-height: 210px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  padding: 0 20px;
  flex-direction: column;
  justify-content: space-between;
`;
