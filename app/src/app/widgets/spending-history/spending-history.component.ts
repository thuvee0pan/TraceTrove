import { Component, Input, OnInit, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-spending-history',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './spending-history.component.html',
  styleUrl: './spending-history.component.css',
})
export class SpendingHistoryComponent implements OnInit {
  // @Input() filterOption!: string;
  filterOption = input()
  displayedColumns: string[] = [
    'category',
    'dateTime',
    'amount',
    'currency',
    'description',
    'source',
    'transactionType',
  ];
  dataSource = new MatTableDataSource();
  signalData = signal("This is value");
  constructor(private transactionService: TransactionService) {}
  ngOnInit(): void {
    this.transactionService.transactions$.subscribe((d) => {
      this.dataSource.data = d;
      console.log('Transaction saved:', this.dataSource);
    });
  }

  addNewTransaction() {
    this.signalData.set('valueChange')
    const newTransaction = {
      id: 1,
      category: 'Utilities',
      dateTime: new Date(),
      amount: 100,
      currency: 'USD',
      description: 'Electricity bill',
      source: 'Saving Account',
      transactionType: 'Spending',
    };
    this.transactionService.addTransaction(newTransaction);
  }
}
