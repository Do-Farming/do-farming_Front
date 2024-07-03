import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const PreviewContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const PreviewImage = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: cover;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  background-color: transparent;
  margin-bottom: 30px;
`;

export const Button = styled.Pressable`
  flex: 1;
  align-items: center;
`;

export const DetectResult = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: green;
  margin-top: 20px;
`;

export const DetectFail = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: #e22f2f;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DetectView = styled.View`
  flex-direction: column;
`;
