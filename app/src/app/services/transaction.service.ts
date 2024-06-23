import { Injectable } from '@angular/core';
import { Transaction } from '../models/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [
    { id:1, category: 'Food', dateTime: new Date(), amount: 20, currency: 'USD', description: 'Lunch', source: 'Checking Account', transactionType: 'Spending' }
  ];
   transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>(this.transactions)

  constructor() { }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  addTransaction(transaction: Transaction): void {
    var transactions = this.transactions$.getValue();
    this.transactions.push(transaction);
    this.transactions$.next(transactions)
  }

  editTransaction(id: number, updatedTransaction: Transaction): void {
    var transactions = this.transactions$.getValue();
    const index = this.transactions.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
      this.transactions[index] = updatedTransaction;
    }
    this.transactions$.next(transactions)
  }

  deleteTransaction(id: number): void {
    var transactions = this.transactions$.getValue();
    this.transactions = this.transactions.filter(transaction => transaction.id !== id);
    this.transactions$.next(transactions)

  }
}
