import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create CHANGE_RISK action', () => {
    expect(actions.changeRisk(0)).toEqual({
      type: 'CHANGE_RISK',
      risk: 0
     })
  })
})
