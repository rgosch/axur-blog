import { format } from './date';

describe('[Logic] date > format', () => {
  it('Should returns 12/04/2017', () => {
    expect(format(1492004832000)).toEqual('12/04/2017');
  });

  it('Should returns 07/05/2015', () => {
    expect(format(1431006432000)).toEqual('07/05/2015');
  });

  it('Should returns 20/03/2017', () => {
    expect(format(1490010372000)).toEqual('20/03/2017');
  });
});
