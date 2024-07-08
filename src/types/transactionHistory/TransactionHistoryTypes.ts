export interface TransactionHistory {
  id: number;
  accountNumber: number;
  dealdate: number[];
  dealClassification: string;
  remainBalance: number;
  amount: number;
  recipient: string;
  recipientBank: string;
  recipientNumber: number;
  sender: string;
  recipientRemarks: string;
  senderRemarks: string;
}
