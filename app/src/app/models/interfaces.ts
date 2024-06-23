export interface Transaction {
  id: number,
  category: string;
  dateTime: Date;
  amount: number;
  currency: string;
  description: string;
  source: string;
  transactionType: string;
}
