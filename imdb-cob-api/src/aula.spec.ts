import { somar, subtrair, calc } from './aula';
import * as aulaModule from './aula';

describe('Aula Suite', () => {
  it('Este teste deverá validar se 2 + 2 = 4', () => {
    const calc = 2 + 2;
    expect(calc).toEqual(4);
  });

  it("shouldn't return 2", () => {
    const calc = 2 + 2;
    expect(calc).not.toEqual(2);
  });
});

describe('Somar Suite', () => {
  it('should return a value', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const result = somar(3, 5);
    expect(result).toEqual(8);
    expect(consoleLogSpy).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      'Os números que serão somados são: 3 e 5',
    );
  });
});

describe('Subtrair Suite', () => {
  it('it should be false', () => {
    const result = subtrair(3, 2);
    expect(result).toBe(1);
  });
});

describe('Calc Suite', () => {
  it('it should return 13', () => {
    const somarSpy = jest.spyOn(aulaModule, 'somar');
    const subtrairStub = jest
      .spyOn(aulaModule, 'subtrair')
      .mockReturnValueOnce(10);
    const result = calc(3, 2);
    expect(result).toBe(10);
    expect(somarSpy).toHaveBeenCalled();
    expect(somarSpy).toHaveBeenCalledWith(3, 2);
    expect(subtrairStub).toHaveBeenCalled();
  });
});
