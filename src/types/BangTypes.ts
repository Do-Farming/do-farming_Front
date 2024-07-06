export interface BangProps {
  onPress?: () => 'void';
}

export interface BangStatus {
  status: number;
}

export interface SelectBoxType {
  label: string;
  value: boolean | string | number;
}

export interface BangType {
  groupName: string;
  groupNumber: number;
  title: string;
  desc: string;
  wakeupTime: string;
  isPublic: boolean;
}

export interface BangListType {
  id: number;
  groupName: string;
  groupNumber: number;
  participantNumber: number;
  title: string;
  createdDate: number[];
  startedAt: number[];
  endedAt: number[];
}

export interface GroupMemberType {
  id: number;
  memberName: string;
}

export interface BangDetailType {
  id: number;
  groupName: string;
  groupNumber: number;
  participantNumber: number;
  title: string;
  description: string;
  wakeupTime: string;
  createdDate: number[];
  status: number;
  groupMembers: GroupMemberType[];
  startedAt: number[];
  endedAt: number[];
  joined: boolean;
  admin: boolean;
}
