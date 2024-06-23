import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingHistoryComponent } from './spending-history.component';

describe('SpendingHistoryComponent', () => {
  let component: SpendingHistoryComponent;
  let fixture: ComponentFixture<SpendingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendingHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
