import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cliente } from '../../models/cliente';
import {
  ClassNamePorValorPipe,
  ClassNamesDeValor,
} from '../../pipes/class-name-por-valor.pipe';

@Component({
  selector: 'app-consulta-saldo',
  standalone: true,
  imports: [
    CommonModule,
    ClassNamePorValorPipe,
  ],
  templateUrl: './consulta-saldo.component.html',
  styleUrl: './consulta-saldo.component.css'
})
export class ConsultaSaldoComponent {

  public cliente: Cliente = new Cliente(
    'Maria das Couves',
    99.99,
    new Date(),
  );

  public get creditoPreAprovadoClasses(): ClassNamesDeValor {
    return {
      zero: 'zero',
      positivo: 'positivo destaque',
      negativo: 'negativo',
    }
  };

}
