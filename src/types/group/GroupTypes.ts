export interface Group {
  id: number;
  groupName: string;
  groupNumber: number;
  participantNumber: number;
  title: string;
  description: string;
  wakeupTime: string;
  createdDate: number[];
  status: number;
  groupMembers: object[];
  startedAt: number[];
  endedAt: number[];
  joined: boolean;
  admin: boolean;
  public: boolean;
}
