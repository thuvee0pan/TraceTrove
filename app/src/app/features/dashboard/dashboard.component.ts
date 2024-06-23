import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent } from '../../widgets/transaction-form/transaction-form.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SpendingHistoryComponent } from '../../widgets/spending-history/spending-history.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TransactionFormComponent,
    SpendingHistoryComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private transactionService: TransactionService) { }

  getTotalBalance(): number {
    const transactions = this.transactionService.getTransactions();
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  }

  getTotalSpending(): number {
    const transactions = this.transactionService.getTransactions();
    return transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0);
  }
}
