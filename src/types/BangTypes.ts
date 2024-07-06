export interface BangProps {
  onPress?: () => 'void';
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
