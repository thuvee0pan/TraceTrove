import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Transaction } from '../../models/interfaces';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TransactionService } from '../../services/transaction.service';
@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent implements OnInit {
  categories = ['Alcohol', 'Food', 'Petrol', 'Mobile Internet'];
  sources = ['Checking Account', 'Saving Account', 'Credit Card'];
  currencies = ['LKR', 'USD'];
  transactionTypes = ['Spending', 'Lending'];
  private today = new Date();
  transactionForm!: FormGroup;

  get getCurrencyPrefix() {
    return this.transactionForm.value.currency === 'USD' ? '$' : 'RS';
  }
  get formatDate(): any {
    return new Date();//.toISOString().slice(0, 16); // Ensures the date is in the correct format
  }
  constructor(
    private fb: FormBuilder,
    private transaction: TransactionService
  ) {}
  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      category: ['', Validators.required],
      dateTime: [this.formatDate, Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
      currency: ['LKR', Validators.required],
      description: [''],
      source: ['Checking Account', Validators.required],
      transactionType: ['Spending', Validators.required],
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      const newTransaction: Transaction = this.transactionForm.value;
      newTransaction.id = 2;
      this.transaction.addTransaction(newTransaction)
    }
  }

  openModal(content: any) {
    // this.modalService.open(content);
  }

  addCategory(categoryInput: string) {
    if (categoryInput && !this.categories.includes(categoryInput)) {
      this.categories.push(categoryInput);
    }
  }

  addSource(sourceInput: string) {
    if (sourceInput && !this.sources.includes(sourceInput)) {
      this.sources.push(sourceInput);
    }
  }
}
