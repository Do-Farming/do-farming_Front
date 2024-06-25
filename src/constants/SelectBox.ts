import { SelectBoxType } from '../types/BangTypes';

export const recruitNumList: SelectBoxType[] = [
  { label: '1명', value: 1 },
  { label: '2명', value: 2 },
  { label: '3명', value: 3 },
  { label: '4명', value: 4 },
  { label: '5명', value: 5 },
];

export const wakeupTimeList: SelectBoxType[] = [
  { label: '오전 5시', value: '05' },
  { label: '오전 5시 30분', value: '0530' },
  { label: '오전 6시', value: '06' },
  { label: '오전 6시 30분', value: '0630' },
  { label: '오전 7시', value: '07' },
  { label: '오전 7시 30분', value: '0730' },
  { label: '오전 8시', value: '08' },
  { label: '오전 8시 30분', value: '0830' },
  { label: '오전 9시', value: '09' },
];

export const disclosureList: SelectBoxType[] = [
  { label: '공개', value: true },
  { label: '비공개', value: false },
];
