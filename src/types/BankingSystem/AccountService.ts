export interface sendAccount{
    accountId : number,
    amount: number,
    password: string,
    recipientBank: string,
    recipientAccountNumber: number,
    recipientRemarks: string,
    senderRemarks: string,
}

export interface myAccount{
    Id : number,
    balance: number,
    password: string,
    accountNumber: number,
    name : string
}