

const data = [300, 50, 100, 100, 20];
data[0] = [300, 50, 100, 100, 20];
data[1] = [200, 20, 200, 10, 20];
data[2] = [120, 40, 150, 40, 10];
data[3] = [5, 10, 300, 100, 100];
data[4] = [400, 30, 100, 17, 100];
data[5] = [300, 50, 10, 100, 40];
data[6] = [100, 70, 180, 100, 50];
data[7] = [200, 50, 10, 100, 90];
data[8] = [500, 40, 106, 200, 20];
data[9] = [10, 30, 100, 120, 40];
data[10] = [300, 50, 100, 150, 10];


const riskReducer = (state = data, action) => {
  switch (action.type) {
    case 'CHANGE_RISK':
      return {
        risk: action.risk,
        data: data[action.risk],
      };
    default:
      return state;
  }
};

export default riskReducer;
