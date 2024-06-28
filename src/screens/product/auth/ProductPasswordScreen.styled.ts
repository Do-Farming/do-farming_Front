import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Header = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const DotsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  margin-bottom: 50px; /* 여기서 마진을 줄였습니다 */
`;

interface DotProps {
  filled: boolean;
}

export const Dot = styled.View<DotProps>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.filled ? 'black' : 'lightgray')};
  border-radius: 5px;
`;

export const KeypadContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 350px;
`;

export const Key = styled.TouchableOpacity`
  width: 100px;
  height: 65px;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const Num = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const GIFs = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px; /* 추가된 부분 */
`;

export const SignUpButton = styled.TouchableOpacity`
  background-color: #008e71;
  padding: 15px;
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

export const SignUpButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
