import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.grayColor};
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
  padding: 12px;
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
