import React, { useRef, useState } from 'react';
import { View, Text, Animated, Dimensions, FlatList } from 'react-native';
import {
  ItemContainer,
  ItemTextContainer,
  ItemTitle,
  ItemSubtitle,
  ItemDate,
  Container,
  Header,
  HeaderText,
  BackButton,
  MenuButton,
  AccountInfo,
  AccountDetails,
  Tab,
  TabText,
  AccountText,
  AccountNumber,
  AccountBalance,
  ActionButton,
  StyledTextInput,
  InputContainer,
  ActionsContainer,
  TabContainer,
  TextInputText,RowWide,
  AnimatedTabContainer,
  StyledAccountInput,
  AccountTextInput,
  LabelText,
  AccountIcon,
  AccountInput,
  AnimatedBalanceContainer,
  AmountInputContainer,
  AmountButton,
  AmountButtonText,
  KeypadContainer,
  KeypadRow,
  KeypadButton,
  KeypadButtonText,
  LabelText2,
  SubHeaderText,
  ConfirmButton,
  ConfirmButtonText,
  StyledTextInputAccount,
  DotContainer,
  Container2,
  Dot,
  Card, Title, InfoText, BoldText, ButtonContainer, CustomButton, ButtonText 
} from './SendMoneyScreen.styled';
import { Row } from '../home/HomeScreen.styled';
import { Account } from '../../types/account/AccountTypes';
import axios from 'axios';
import { sendAccount } from '../../types/BankingSystem/AccountService';
import { StyledImage } from '../bang/bangDetail/BangDetailScreen.styled';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const formatAmount = (amount: string) => {
  if (!amount) return '';
  const number = parseInt(amount.replace(/,/g, ''));
  return number.toLocaleString();
};
// Test용 Data > 추후 삭제 예정
const accountData = [
  {
    id: 1,
    name: '김민표',
    bank: '하나',
    accountNumber: 1110357059277,
    date: '2024-06-15',
  },
  {
    id: 2,
    name: '한정선',
    bank: '하나',
    accountNumber: 1110313457220,
    date: '2024-03-26',
  },
  {
    id: 3,
    name: '오유나',
    bank: '하나',
    accountNumber: 3333221546301,
    date: '2024-03-21',
  },
  {
    id: 4,
    name: '오유나',
    bank: '하나',
    accountNumber: 3333221546301,
    date: '2024-03-21',
  },
];

const myAccountData = [
  {
    id:1,
    name: 'string',
    accountNumber: '1110357059277',
    balance: 0,
  },
  {
    id:2,
    name: 'string',
    accountNumber: 1110313457220,
    balance: 5000000,
  },
];

export const objectDetect = async (sendAccounts: sendAccount, send:string, recive:string) => {
  const url = 'http://172.16.20.55/api/v1/account/simple';

  const requestBody = {
    accountId: sendAccounts.accountId,
    amount: sendAccounts.amount,
    password: sendAccounts.password,
    recipientBank: sendAccounts.recipientBank,
    recipientAccountNumber: sendAccounts.recipientAccountNumber,
    recipientRemarks: send,
    senderRemarks: recive,
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data.return_object;
  } catch (error) {
    throw error;
  }
};



export const SendMoneyScreen = () => {
  const [activeTab, setActiveTab] = useState('one');
  const [isTabVisible, setIsTabVisible] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(false);
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [isSecretVisible, setIsSecretVisible] = useState(false);
  const [currentAccountIndex, setCurrentAccountIndex] = useState(0);
  const slideAnimOne = useRef(new Animated.Value(windowHeight)).current;
  const slideAnimTwo = useRef(new Animated.Value(windowHeight)).current;
  const slideAnimThree = useRef(new Animated.Value(windowHeight)).current;
  const slideAnimFour = useRef(new Animated.Value(windowHeight)).current;
  const slideAnimFive = useRef(new Animated.Value(windowHeight)).current;
  const [account, setAccount] = useState(null);
  const [myAccount, setMyAccount] = useState(null);
  const [sendAccount, setSendAccount] = useState<sendAccount>({
    accountId : myAccountData[currentAccountIndex].id,
    amount: 0,
    password: '',
    recipientBank: '하나',
    recipientAccountNumber: 0,
    recipientRemarks: '',
    senderRemarks: '',
  })
  const [amount, setAmount] = useState('');
  const [send, setSend] = useState('강민주');
  const [recive, setRecive] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
  };

  

  const handleKeypadPress = (value: string) => {
    if (value === '완료') {
      handleBalanceInputPress();
      setSendAccount({ ...sendAccount, amount: parseInt(amount.replace(/,/g, '').replace(' 원', '')) })
      return;
    }
    if (value === 'X') {
      setAmount(amount.slice(0, -1));
      return;
    }
    setAmount((prevAmount) => {
      const newAmount = prevAmount + value;
      
      return formatAmount(newAmount);
    });
  };
  const handleSecretKeypadPress = (num: string) => {
    if (num === '완료') {
      handleSecretInputPress();
      AccountFinalPress();
      setSendAccount({ ...sendAccount, password: secretKey})
      return;
    }
    if (num === '←') {
      setSecretKey((prevSecertKey) => prevSecertKey.slice(0, -1));
      setSendAccount({ ...sendAccount, password: secretKey})
      return;
    }
    if (secretKey.length < 4) {
      setSecretKey((prevSecertKey) => prevSecertKey + num);
      setSendAccount({ ...sendAccount, password: secretKey})
    }
  };
  const handleAmountButtonPress = (value: number) => {
    setAmount((prevAmount) => {
      const currentAmount =
        parseInt(prevAmount.replace(/,/g, '').replace(' 원', '')) || 0;
      const newAmount = currentAmount + value;
      return formatAmount(newAmount.toString());
    });
  };

  const handleAccountInputPress = () => {
    setIsAccountVisible(!isAccountVisible);
    Animated.timing(slideAnimOne, {
      toValue: isAccountVisible ? windowHeight : windowHeight * 0.5, // Adjust to the desired height of the tab container
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const AccountInputPress = (item: Account) => {
    setAccount(item);
    setSendAccount({...sendAccount, recipientAccountNumber:item.accountNumber})
    setRecive(item.name);
    setIsTabVisible(!isTabVisible);
    Animated.timing(slideAnimTwo, {
      toValue: isTabVisible ? windowHeight + 100 : windowHeight * 0.5, // Adjust to the desired height of the tab container
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const AccountInputPress2 = (item: Account) => {
    setMyAccount(item);
    setSendAccount({...sendAccount, accountId:item.id})
    setIsTabVisible(!isTabVisible);
    Animated.timing(slideAnimOne, {
      toValue: isAccountVisible ? windowHeight : windowHeight * 0.5, // Adjust to the desired height of the tab container
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const AccountFinalPress = () => {
    setIsTabVisible(!isTabVisible);
    Animated.timing(slideAnimFive, {
      toValue: isTabVisible ? windowHeight + 100 : windowHeight * 0.3, // Adjust to the desired height of the tab container
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleTextInputPress = () => {
    setIsTabVisible(!isTabVisible);
    Animated.timing(slideAnimTwo, {
      toValue: isTabVisible ? windowHeight + 100 : windowHeight * 0.5, // Adjust to the desired height of the tab container
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBalanceInputPress = () => {
    setIsBalanceVisible(!isBalanceVisible);
    Animated.timing(slideAnimThree, {
      toValue: isBalanceVisible ? windowHeight + 100 : windowHeight - 350, // Adjust to the desired height of the tab container
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const handleSecretInputPress = () => {
    setIsSecretVisible(!isSecretVisible);
    Animated.timing(slideAnimFour, {
      toValue: isSecretVisible ? windowHeight + 100 : windowHeight -300, // Adjust to the desired height of the tab container
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const renderItem = ({ item }) => (
    <ItemContainer onPress={() => AccountInputPress(item)}>
      <ItemTextContainer>
        <ItemTitle>      
          <StyledImage
          source={require("../../assets/hana-symbol.png")}
          width={20}
          height={20}
          ></StyledImage> {item.name}</ItemTitle>
        <ItemSubtitle>
           {item.accountNumber}
        </ItemSubtitle>
      </ItemTextContainer>
      <ItemDate>{item.date}</ItemDate>
    </ItemContainer>
  );

  const renderItem2 = ({ item }) => (
    <ItemContainer onPress={() => AccountInputPress2(item)}>
      <ItemTextContainer>
        <ItemTitle>      
          <StyledImage
          source={require("../../assets/hana-symbol.png")}
          width={20}
          height={20}
          ></StyledImage> {item.name}</ItemTitle>
        <ItemSubtitle>
           {item.accountNumber}
        </ItemSubtitle>
      </ItemTextContainer>
      <ItemDate>{item.date}</ItemDate>
    </ItemContainer>
  );

  const afterBalance = () => (
    <>
      <AccountInput onPress={handleBalanceInputPress}>
        <LabelText>{amount} 원</LabelText>
      </AccountInput>
      <SubHeaderText>보내는 사람</SubHeaderText>
      <StyledTextInputAccount
        placeholder="입금계좌번호 직접입력"
        value={send}
        onChangeText={setSend}
      />
      <SubHeaderText>받는사람</SubHeaderText>
      <StyledTextInputAccount
        placeholder="입금계좌번호 직접입력"
        value={recive}
        onChangeText={setRecive}
        editable={false} // 수정 불가하게 설정
      />

<ConfirmButton onPress={handleSecretInputPress}>
        <ConfirmButtonText>확인</ConfirmButtonText>
      </ConfirmButton>
    </>
  );

  return (
    <Container>
      <Header>
        <BackButton>{'<'}</BackButton>
        <HeaderText>이체</HeaderText>
        <MenuButton>≡</MenuButton>
      </Header>
      <StyledAccountInput onPress={handleAccountInputPress}>
        {myAccount?
        (<AccountInfo>
          <Row>
            <AccountIcon source={require('../../assets/hana-symbol.png')} />
            <AccountText>
              {myAccount.name}
            </AccountText>
          </Row>
          <AccountDetails>
            <AccountNumber>
              {myAccount.accountNumber}
            </AccountNumber>
            <AccountBalance>
              {myAccount.balance} 원
            </AccountBalance>
          </AccountDetails>
        </AccountInfo>)
          :
        (<AccountInfo>
          <Row>
            <AccountIcon source={require('../../assets/hana-symbol.png')} />
            <AccountText>
              {myAccountData[currentAccountIndex].name}
            </AccountText>
          </Row>
          <AccountDetails>
            <AccountNumber>
              {myAccountData[currentAccountIndex].accountNumber}
            </AccountNumber>
            <AccountBalance>
              {myAccountData[currentAccountIndex].balance} 원
            </AccountBalance>
          </AccountDetails>
        </AccountInfo>)
        }
      </StyledAccountInput>

      {account ? (
        <View>
          <StyledTextInput onPress={handleTextInputPress}>
            <TextInputText>{account.name}</TextInputText>
            <TextInputText>{account.account}</TextInputText>
          </StyledTextInput>
          <InputContainer>
            <ActionsContainer>
              <ActionButton>
                <Text>다계좌이체</Text>
              </ActionButton>
              <ActionButton>
                <Text>연락처로 보내기</Text>
              </ActionButton>
            </ActionsContainer>
          </InputContainer>

          {amount == '' ? (
            <AccountInput onPress={handleBalanceInputPress}>
              <LabelText>얼마를 보낼까요?</LabelText>
            </AccountInput>
          ) : (
            afterBalance()
          )}
        </View>
      ) : (
        <View>
          <LabelText>누구에게 보낼까요?</LabelText>
          <StyledTextInput onPress={handleTextInputPress}>
            <TextInputText>은행/계좌번호 입력</TextInputText>
          </StyledTextInput>
          <InputContainer>
            <ActionsContainer>
              <ActionButton>
                <Text>다계좌이체</Text>
              </ActionButton>
              <ActionButton>
                <Text>연락처로 보내기</Text>
              </ActionButton>
            </ActionsContainer>
          </InputContainer>
        </View>
      )}

      <AnimatedTabContainer style={{ top: slideAnimOne }}>
        <TabContainer>
          <Tab
            onPress={() => handleTabPress('one')}
            isActive={activeTab === 'one'}
          >
            <TabText isActive={activeTab === 'one'}>최근</TabText>
          </Tab>
          <Tab
            onPress={() => handleTabPress('two')}
            isActive={activeTab === 'two'}
          >
            <TabText isActive={activeTab === 'two'}>자주</TabText>
          </Tab>
        </TabContainer>
        <FlatList
          data={myAccountData}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </AnimatedTabContainer>

      <AnimatedTabContainer style={{ top: slideAnimTwo }}>
        <AccountTextInput>
          <TextInputText>이름, 계좌번호, 연락처, 국세 등 입력 </TextInputText>
        </AccountTextInput>
        <TabContainer>
          <Tab
            onPress={() => handleTabPress('one')}
            isActive={activeTab === 'one'}
          >
            <TabText isActive={activeTab === 'one'}>최근</TabText>
          </Tab>
          <Tab
            onPress={() => handleTabPress('two')}
            isActive={activeTab === 'two'}
          >
            <TabText isActive={activeTab === 'two'}>자주</TabText>
          </Tab>
          <Tab
            onPress={() => handleTabPress('three')}
            isActive={activeTab === 'three'}
          >
            <TabText isActive={activeTab === 'three'}>내계좌</TabText>
          </Tab>
          <Tab
            onPress={() => handleTabPress('four')}
            isActive={activeTab === 'four'}
          >
            <TabText isActive={activeTab === 'four'}>심플</TabText>
          </Tab>
        </TabContainer>
        <FlatList
          data={accountData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </AnimatedTabContainer>

      <AnimatedBalanceContainer style={{ top: slideAnimThree }}>
        <KeypadContainer>
          <LabelText2>얼마를 보낼까요?</LabelText2>

          <AmountInputContainer>
            {Object.entries({
              '+1만': 10000,
              '+5만': 50000,
              '+10만': 100000,
              '+100만': 1000000,
              전액: 1000000,
            }).map(([key, value]) => (
              <AmountButton
                key={key}
                onPress={() => handleAmountButtonPress(value)}
              >
                <AmountButtonText>{key}</AmountButtonText>
              </AmountButton>
            ))}
          </AmountInputContainer>
          {[
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['←', '0', '완료'],
          ].map((row, rowIndex) => (
            <KeypadRow key={rowIndex}>
              {row.map((num) => (
                <KeypadButton key={num} onPress={() => handleKeypadPress(num)}>
                  <KeypadButtonText>{num}</KeypadButtonText>
                </KeypadButton>
              ))}
            </KeypadRow>
          ))}
        </KeypadContainer>
      </AnimatedBalanceContainer>
      <AnimatedBalanceContainer style={{ top: slideAnimFour }}>
        <KeypadContainer>
        <DotContainer>
        {[0, 1, 2, 3].map((index) => (
          <Dot key={index} filled={index < secretKey.length} />
        ))}
      </DotContainer>       
          
          {[
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['←', '0', '완료'],
          ].map((row, rowIndex) => (
            <KeypadRow key={rowIndex}>
              {row.map((num) => (
                <KeypadButton key={num} onPress={() => handleSecretKeypadPress(num)}>
                  <KeypadButtonText>{num}</KeypadButtonText>
                </KeypadButton>
              ))}
            </KeypadRow>
          ))}
        </KeypadContainer>
      </AnimatedBalanceContainer>



      <AnimatedTabContainer style={{ top: slideAnimFive }}>
        <Container2>
        <Card>
        <Title>{sendAccount.recipientBank} {recive}님께</Title>
        <Title>{amount}원을 이체합니다.</Title>
          <RowWide>
            <InfoText>입금계좌</InfoText>
            <InfoText><BoldText>{sendAccount.recipientBank} {sendAccount.recipientAccountNumber}</BoldText></InfoText>
          </RowWide>
          <RowWide>
            <InfoText>수수료</InfoText>
            <InfoText><BoldText>면제</BoldText></InfoText>
          </RowWide>
          <RowWide>
            <InfoText>받는분에게 표기</InfoText>
            <InfoText><BoldText>{send}</BoldText></InfoText>
          </RowWide>
          <RowWide>
            <InfoText>나에게 표기</InfoText>
            <InfoText><BoldText>{recive}</BoldText></InfoText>
          </RowWide>

            <ButtonContainer>
              <CustomButton>
                <ButtonText>취소</ButtonText>
              </CustomButton>
              <CustomButton primary onPress={() => objectDetect(sendAccount, send, recive)}
              >
                <ButtonText>강민주님에게 이체</ButtonText>
              </CustomButton>
            </ButtonContainer>
        </Card>
        </Container2>
      </AnimatedTabContainer>
      
    </Container>
  );
};
