import risk from './riskReducer'

let data = [200, 20, 200,10,20];
let initialState = {
  risk:1,
  data: data
}

describe('risk reducer', () => {
  it('should handle initial state', () => {
    expect(
      risk(initialState, {})
      ).toEqual(
       {
        risk: 1,
        data: data
        }
     )
  })

 let data2 = [120, 40, 150,40,10];
 
 let initialStateChange = {
  risk:2,
  data: data2
}

 it('should handle Change Risk', () => {
    expect(
      risk(initialStateChange, {})
      ).toEqual(
       {
        risk: 2,
        data: data2
        }
     )
  })

})
