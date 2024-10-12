import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente(
      'José Pereira',
      100.00,
      new Date('2024-10-12T11:12:10.000Z'),
    );
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

  it('deveria conter "José Pereira" como nome', () => {
    expect(cliente.nome).toBe('José Pereira');
  });

});
