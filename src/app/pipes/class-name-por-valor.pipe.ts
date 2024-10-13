import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorValor',
  standalone: true
})
export class ClassNamePorValorPipe implements PipeTransform {

  /**
   * Retorna `'zero'`, `'positivo'` ou `'negativo'`, de acordo com o número especificado.
   *
   * @param valor Número a ser verificado.
   */
  public transform(valor: number): string {
    if (valor >= 0.005) {
      return 'positivo';
    } else if (valor > -0.005 && valor < 0.005) {
      return 'zero';
    } else {
      return 'negativo';
    }
  }

}
