export interface Account {
  id: number;
  accountNumber: number;
  name: string;
  balance: number;
  productType: string;
  createdAt: number[];
  histories: boolean;
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
