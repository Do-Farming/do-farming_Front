import styled from 'styled-components/native';
import { BangProps } from '../../../types/BangTypes';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.grayColor};
  height: 100vh;
`;

export const Title = styled.Text`
  padding-left: 5px;
  font-size: 17px;
  font-weight: 800;
  margin-top: 10px;
`;

export const BoardContainer = styled.View`
  background-color: #fff;
  min-height: 210px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(77, 77, 77, 0.25);
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const InputContainer = styled.View`
  flex-direction: column;
  gap: 8px;
`;
``;
export const InputTitle = styled.Text`
  font-size: 15px;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))`
  width: 100%;
  background-color: ${(props) => props.theme.grayColor};
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 8px;
`;

export const TextArea = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.placeholderColor,
}))`
  width: 100%;
  background-color: ${(props) => props.theme.grayColor};
  padding: 12px;
  border-radius: 8px;
  height: 120px;
`;

export const SelectBox = styled.SectionList`
  width: 100%;
  background-color: ${(props) => props.theme.grayColor};
  border-radius: 8px;
`;

export const EnterButton = styled.TouchableOpacity<BangProps>`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 80px;
`;

export const EnterText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  text-align: center;
`;

export const TextModal = styled.Text`
  color: #17191c;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
`;

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.View`
  width: 220px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  align-items: center;
  justify-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const ModalText = styled.Text`
  color: #17191c;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

export const ModalButton = styled.Pressable`
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin: 0;
`;

export const ModalButtonText = styled.Text`
  font-weight: 600;
  text-align: center;
`;

export const CancelButton = styled.Pressable`
  position: absolute;
  right: 20;
  top: 15;
`;
