import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  Profile,
  ProfileImage,
  ProfileName,
  Menu,
  MenuItem,
  MenuItemImage,
  MenuItemText,
  MenuItemButton,
} from './MyPageScreen.styled';
import ChallengingTabView from './challengingTabView/ChallengingTabView';
import MyAccountView from './myAccountView/MyAccountView';
import { MyInfo } from '../../types/mypage/MyPageTypes';
import { ApiResponse } from '../../types';
import axiosInstance from '../../apis/axiosInstance';
import { Account } from '../../types/account/AccountTypes';
import { Group } from '../../types/group/GroupTypes';

export default function MyPageScreen() {
  const [selectedView, setSelectedView] = useState<string>('challenging');
  const [myInfo, setMyInfo] = useState<MyInfo>();
  const [myAccountList, setMyAccountList] = useState<Account[]>([]);
  const [myGroup, setMyGroup] = useState<Group>();

  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const response =
          await axiosInstance.get<ApiResponse<MyInfo>>(`/api/v1/customer/me`);
        if (response.data.isSuccess) {
          setMyInfo(response.data.result);
        } else {
          console.log('내 정보 데이터 요청 실패');
        }
      } catch (error) {
        console.error('내 정보 데이터 요청 중 에러 발생:', error);
      }
    };

    getMyInfo();

    const getMyAccountList = async () => {
      try {
        const response = await axiosInstance.get<ApiResponse<Account[]>>(
          `/api/v1/account/my/checking`,
        );
        if (response.data.isSuccess) {
          setMyAccountList(response.data.result);
        } else {
          console.log('내 계좌 데이터 요청 실패');
        }
      } catch (error) {
        console.error('내 계좌 데이터 요청 중 에러 발생:', error);
      }
    };

    getMyAccountList();

    const getMyGroup = async () => {
      try {
        const response =
          await axiosInstance.get<ApiResponse<Group>>(`/group/my`);
        if (response.data.isSuccess) {
          console.log(response.data.result);
          setMyGroup(response.data.result);
        } else {
          console.log('내가 속한 그룹 데이터 요청 실패');
        }
      } catch (error) {
        console.error('내가 속한 그룹 데이터 요청 중 에러 발생:', error);
      }
    };

    getMyGroup();
  }, []);

  return (
    <Container>
      <Header>
        <Profile>
          <ProfileImage source={require('../../assets/1.png')} />
          <ProfileName>{myInfo?.name}님</ProfileName>
        </Profile>
        <Menu>
          <MenuItem>
            <MenuItemButton
              onPress={() => {
                setSelectedView('challenging');
              }}
            >
              <MenuItemImage source={require('../../assets/challenging.png')} />
            </MenuItemButton>
            <MenuItemText>챌린징</MenuItemText>
          </MenuItem>
          <MenuItem>
            <MenuItemButton
              onPress={() => {
                setSelectedView('myAccount');
              }}
            >
              <MenuItemImage source={require('../../assets/myaccount.png')} />
            </MenuItemButton>
            <MenuItemText>내 계좌</MenuItemText>
          </MenuItem>
        </Menu>
      </Header>
      {selectedView === 'challenging' ? (
        myGroup && <ChallengingTabView myGroup={myGroup} />
      ) : (
        <MyAccountView myAccountList={myAccountList} />
      )}
    </Container>
  );
}
