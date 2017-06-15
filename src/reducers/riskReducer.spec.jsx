import risk from './riskReducer';

describe('risk reducer', () => {
  it('should handle initial state', () => {
    const data = [200, 20, 200, 10, 20];
    const initialState = {
      risk: 1,
      data,
    };
    expect(
      risk(initialState, {}),
      ).toEqual(
      {
        risk: 1,
        data,
      },
     );
  });

  it('should handle Change Risk', () => {
    const data = [120, 40, 150, 40, 10];

    const initialStateChange = {
      risk: 2,
      data: data,
    };
    expect(
      risk(initialStateChange, {}),
      ).toEqual(
      {
        risk: 2,
        data: data,
      },
     );
  });
});
