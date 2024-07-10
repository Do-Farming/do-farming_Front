import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #f9f9fb;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Container2 = styled.View`
  flex: 1;
  background-color: #f9f9fb;
`;

export const RowWide = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

export const TextInputText = styled.Text`
  font-size: 20px;
  color: #666666;
`;
export const AccountIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
export const BackButton = styled.Text`
  font-size: 18px;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const MenuButton = styled.Text`
  font-size: 18px;
`;

export const AccountInfo = styled.View`
  padding: 5px 20px;
`;

export const AccountDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AccountText = styled.Text`
  font-size: 18px;
`;

export const AccountNumber = styled.Text`
  font-size: 16px;
  color: #555;
`;

export const AccountBalance = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  text-align: right;
  margin-top: 10px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  margin: 20px 20px 10px;
`;

export const InputContainer = styled.View`
  padding: 0 20px;
`;

export const StyledTextInputAccount = styled.TextInput`
  width: 90%;
  height: 70px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0px auto;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const StyledAccountInput = styled(TouchableOpacity)`
  width: 90%;
  padding: 2px;
  margin: 10px 5%;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: center;
  background-color: #f1f1f1;
`;

export const GreenLine = styled.View`
  width: 100%; // 전체 너비로 설정
  height: 2px; // 선의 두께
  background-color: green; // 선의 색상
`;

export const AccountTextInput = styled(TouchableOpacity)`
  width: 90%;
  height: 50px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0px auto;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: center;
`;
export const ActionsContainer = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  text-align: right;
`;

export const AnimatedTabContainer = styled(Animated.View)`
  border-radius: 20px;
  margin-top: 20px;
  position: absolute;
  width: 100%;
  background-color: white;
  padding: 10px 0;
`;

export const AnimatedBalanceContainer = styled(Animated.View)`
  margin-top: 20px;
  border-radius: 20px;
  position: absolute;
  width: 100%;
  background-color: white;
  padding: 10px 0;
`;

export const ActionButton = styled.Text`
  font-size: 20px;
  margin-right: 5px;
  color: #666666;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #f5f5f5;
`;

export const Tab = styled(TouchableOpacity)<{ isActive: boolean }>`
  padding: 10px;
  border-bottom-width: 3px;
  border-radius: 5px;
  border-bottom-color: ${(props) =>
    props.isActive ? '#009591' : 'transparent'};
`;

export const TabText = styled(Text)<{ isActive: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.isActive ? 'black' : '#666666')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`;

export const ItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f5f5f5;
`;

export const BankIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const ItemTextContainer = styled.View`
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ItemSubtitle = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const LabelText = styled.Text`
  font-size: 22px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px 25px;
`;

export const LabelText2 = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const AccountInput = styled.TouchableOpacity`
  font-size: 22px;
  color: #555;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px 25px;
`;

export const ItemDate = styled.Text`
  font-size: 12px;
  color: #aaa;
`;

export const StyledTextInput = styled(TouchableOpacity)`
  width: 90%;
  height: 70px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0px auto;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const DropdownContainer = styled.View`
  position: absolute;
  top: 100px; // Adjust according to your layout
  width: 80%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1000;
`;

export const DropdownItem = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
export const TextInputContainer = styled.View`
  width: 90%;
  margin-top: 20px;
  justify-content: center;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0px 10px;
`;
export const SubHeaderText = styled.Text`
  font-size: 16px;
  color: #888;
  margin: 10px 20px;
`;


export const DotContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Dot = styled.View<{ filled: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  margin:10px 20px 0px 0px;
  background-color: ${(props) => (props.filled ? '#00a585' : '#ccc')};
`;
export const DropdownDetails = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const AmountInputContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const AmountButton = styled(TouchableOpacity)`
  background-color: #454962;
  padding: 7.5px 15px;
  margin: 0 5px;
  border-radius: 5px;
`;

export const AmountButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const KeypadContainer = styled.View`
  background-color: #373a4d;
  padding: 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const KeypadRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 7px 0;
`;

export const KeypadButton = styled(TouchableOpacity)`
  background-color: #373a4d;
  padding: 5px;
  border-radius: 10px;
  width: 20%;
  align-items: center;
`;

export const KeypadButtonText = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const ConfirmButton = styled(TouchableOpacity)`
  background-color: #00a585;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
  width: 90%;
  margin-left: 5%;
`;

export const ConfirmButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Card = styled.View`
  width: 90%;
  margin-left:5%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.Text`
  align-items: center;
  font-align:center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CustomButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: ${props => (props.primary ? '#20b2aa' : '#d3d3d3')};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  border-radius: 10px;
  margin-right: 10px;
`;
