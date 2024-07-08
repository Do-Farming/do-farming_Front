export interface Account {
  id: string;
  name: string;
  bank: string;
  account: string;
  date: string;
  // myAccount
  accountName?: string;
  accountNumber?: string;
  balance?: string;
}

export interface CheckingAccount {
  id: number;
  accountNumber: number;
  name: string;
  balance: number;
  productType: string;
  createdAt: number[];
  histories: any;
}

export interface JoinDofarmingType {
  dofarmingProductId: number;
  withdrawAccountId: number;
  depositAmount: number;
  accountPassword: string;
}
