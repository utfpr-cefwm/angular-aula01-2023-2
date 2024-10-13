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

  describe('getClassNamePorValor', () => {

    it('deve retornar "zero" para 0', () => {
      expect(component.getClassNamePorValor(0)).toBe('zero');
    });

    it('deve retornar "zero" para números levemente positivos', () => {
      expect(component.getClassNamePorValor(0.001)).toBe('zero');
    });

    it('deve retornar "positivo" para números positivos', () => {
      expect(component.getClassNamePorValor(0.005)).toBe('positivo');
    });

    it('deve retornar "positivo" para números muito positivos', () => {
      expect(component.getClassNamePorValor(50)).toBe('positivo');
    });

    it('deve retornar "zero" para números levemente negativos', () => {
      expect(component.getClassNamePorValor(-0.001)).toBe('zero');
    });

    it('deve retornar "negativo" para números negativos', () => {
      expect(component.getClassNamePorValor(-0.005)).toBe('negativo');
    });

    it('deve retornar "negativo" para números muito negativos', () => {
      expect(component.getClassNamePorValor(-50)).toBe('negativo');
    });

  });

});
