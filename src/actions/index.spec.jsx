/* eslint-disable no-undef */
import changeRiskAction from './index';

describe('todo actions', () => {
  it('addTodo should create CHANGE_RISK action', () => {
    expect(changeRiskAction(0)).toEqual({
      type: 'CHANGE_RISK',
      risk: 0,
    });
  });
});
