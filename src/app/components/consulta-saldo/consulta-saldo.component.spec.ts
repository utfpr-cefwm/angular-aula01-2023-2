import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSaldoComponent } from './consulta-saldo.component';

describe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaSaldoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
